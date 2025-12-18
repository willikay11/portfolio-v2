export function Assistant() {
  const { messages, sendMessage, suggestions } = useConversation();

  return (
    <div>
      <MessageList messages={messages} />
      <Suggestions items={suggestions} onSelect={sendMessage} />
      <Input onSubmit={sendMessage} />
    </div>
  );
}
