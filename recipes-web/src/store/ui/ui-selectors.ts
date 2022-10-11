import { RootState } from "../index";

export const loadingSelector = (state: RootState) => state.ui.isLoading;

export const modalSelector = (state: RootState) => state.ui.modal;
