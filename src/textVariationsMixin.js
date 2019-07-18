export const textVariationsMixin = {
  computed: {
    wordLengthComputed() {
      return this.text + " (" + this.text.length + ")";
    },

    reverseTextComputed() {
      return this.text
        .split("")
        .reverse()
        .join("");
    }
  }
};
