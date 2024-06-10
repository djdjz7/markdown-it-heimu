import MarkdownIt from "markdown-it";

export function heimu(md) {
  md.inline.ruler.before("text", "renderHeimu", (state, silent) => {
    if (silent) return false;
    const start = state.pos;
    if (
      state.src.charCodeAt(start) === 0x40 /* @ */ &&
      state.src.charCodeAt(start + 1) === 0x40 /* @ */
    ) {
      const match = state.src.slice(start).match(/^@@(.*)@@/);
      if (match) {
        const content = match[1];
        const token = state.push("renderHeimu", "", 0);
        token.content = content;
        state.pos += match[0].length;
        return true;
      }
    }
    return false;
  });

  md.renderer.rules.renderHeimu = (tokens, idx) => {
    return '<span class="heimu">' + tokens[idx].content + "</span>";
  };
}
