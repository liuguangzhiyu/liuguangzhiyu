export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  systemRule: ""
}

export const defaultMessage = `
- 本站仅用于演示，填入自己的 key 才可使用。
- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Vercel](http://vercel.com/) 提供支持。
- 由 [ourongxing](https://github.com/ourongxing) 修改自 [Diu](https://github.com/ddiu8081/chatgpt-demo)，查看 [源码](https://github.com/ourongxing/chatgpt-vercel)，欢迎自部署。
- **Shift+Enter** 换行。开头输入 **/** 或者 **空格** 搜索 Prompt 预设。点击输入框滚动到底部。
- 系统角色指令，会在每次提问时添加。主要用于对 ChatGPT 的语气，口头禅这些进行定制
- 思维发散程度越高 ChatGPT 思维就越发散，开始乱答`
