interface FigurineState {
  original: string;
  cropped: string;
  useCropped: boolean;
  height: number;
  offsetX: number;
  offsetY: number;
}

export const state: () => FigurineState = () => ({
  original: require("~/assets/img/front/default-figurine.png"),
  cropped: require("~/assets/img/front/default-figurine.png"),
  useCropped: true,
  height: 175, // px
  offsetX: 730, // 73.0% left
  offsetY: 10, // 1.0% top
});

export const mutations = {
  setHeight(state: FigurineState, height: number) {
    state.height = height;
  },
  setOffsetX(state: FigurineState, offsetX: number) {
    state.offsetX = offsetX;
  },
  setOffsetY(state: FigurineState, offsetY: number) {
    state.offsetY = offsetY;
  },
  setCropping(state: FigurineState, useCropped: boolean) {
    state.useCropped = useCropped;
  },
  upload(state: FigurineState, image: string) {
    state.original = image;
    state.cropped = image;
  },
  crop(state: FigurineState, image: string) {
    state.cropped = image;
  },
};