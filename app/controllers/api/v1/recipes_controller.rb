module Api
  module V1
    class RecipesController < ApplicationController
      before_action :require_login
      after_action :set_pagination_headers, only: :index

      def index
        @recipes = Recipe.where('user_id IN (?)', current_user.id).page(page).per(4).order(:id)
        set_pagination_headers
        render json: @recipes, status: :ok
      end

      def create
        @recipe = current_user.recipes.build(recipe_params)

        if @recipe.save
          render json: { status: 'success', message: "The recipe of #{@recipe.title} is created!" }, status: :ok
        else
          render json: { status: 'error', message: "The recipe can't be created" }, status: :unprocessable_entity
        end
      end

      def show
        @recipe = Recipe.find(params[:id])

        if current_user.id == @recipe.user_id
          render json: @recipe, status: :ok
        else
          render json: { status: 'error', message: "You can't see other users' recipes" }
        end
      end

      def update
        @recipe = Recipe.find(params[:id])

        if current_user.id == @recipe.user_id
          @recipe.update(recipe_params)

          if @recipe.save
            render json: { status: 'success', message: 'Recipe is updated!', data: @recipe }, status: :ok
          else
            render json: { status: 'error', message: "Recipe can't be updated!" }, status: :unprocessable_entity
          end
        else
          render json: { status: 'error', message: "You can't update other users recipes!" }
        end
      rescue ActiveRecord::RecordNotFound
        render json: { message: 'Recipe not found!' }
      end

      def destroy
        @recipe = Recipe.find(params[:id])

        if current_user.id == @recipe.user_id
          @recipe.destroy
          render json: { status: 'success', message: 'Recipe successfully deleted!' }, status: :ok
        else
          render json: { status: 'error', message: "You can't delete other users recipes!" }
        end
      rescue ActiveRecord::RecordNotFound
        render json: { message: 'Recipe not found!' }
      end

      private

      def recipe_params
        params.permit(:title, :category, :description, :ingredients, :measurements, :about, :recipe_image)
      end

      def page
        @page ||= params[:page] || 1
      end

      def set_pagination_headers
        response.headers['X-Total-Count'] = @recipes.total_count
      end
    end
  end
end
