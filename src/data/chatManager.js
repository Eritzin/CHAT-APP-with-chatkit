import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

const chatManager = new ChatManager({
  instanceLocator: "v1:us1:d2a57309-0a97-402f-a968-2005fb770573",
  userId: "eri",
  tokenProvider: new TokenProvider({
    url:
      "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/d2a57309-0a97-402f-a968-2005fb770573/token"
  })
});

export default chatManager;