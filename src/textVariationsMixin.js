export const textVariationsMixin = {
  data() {
    return {
      text: "Regular Text"
    };
  },

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
