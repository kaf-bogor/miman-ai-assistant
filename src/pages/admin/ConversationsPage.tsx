import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send, Bot, User, Shield } from "lucide-react";
import { mockConversations, type Conversation } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export default function ConversationsPage() {
  const [selected, setSelected] = useState<Conversation>(mockConversations[0]);
  const [search, setSearch] = useState("");
  const [reply, setReply] = useState("");

  const filtered = mockConversations.filter(
    (c) =>
      c.customerName.toLowerCase().includes(search.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-[calc(100vh-5rem)] flex gap-4">
      {/* Conversation List */}
      <Card className="w-80 shrink-0 flex flex-col shadow-card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Percakapan</CardTitle>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cari percakapan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 h-9 text-sm"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1 overflow-auto p-2 space-y-1">
          {filtered.map((conv) => (
            <button
              key={conv.id}
              onClick={() => setSelected(conv)}
              className={cn(
                "w-full text-left p-3 rounded-lg transition-colors",
                selected.id === conv.id ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-sm text-foreground">{conv.customerName}</span>
                <div className="flex items-center gap-1.5">
                  {conv.unread > 0 && (
                    <span className="gradient-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {conv.unread}
                    </span>
                  )}
                  <Badge
                    variant={conv.status === "active" ? "default" : conv.status === "resolved" ? "secondary" : "outline"}
                    className="text-[10px] px-1.5 py-0"
                  >
                    {conv.status}
                  </Badge>
                </div>
              </div>
              <p className="text-xs text-muted-foreground truncate mt-1">{conv.lastMessage}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{conv.timestamp}</p>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Chat Detail */}
      <Card className="flex-1 flex flex-col shadow-card">
        <CardHeader className="pb-3 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-base">{selected.customerName}</CardTitle>
              <p className="text-xs text-muted-foreground">{selected.customerPhone}</p>
            </div>
            <Badge
              variant={selected.status === "active" ? "default" : selected.status === "resolved" ? "secondary" : "outline"}
            >
              {selected.status}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="flex-1 overflow-auto p-4 space-y-3">
          {selected.messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex gap-2 max-w-[75%]",
                msg.sender === "customer" ? "mr-auto" : "ml-auto flex-row-reverse"
              )}
            >
              <div
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center shrink-0",
                  msg.sender === "customer" ? "bg-muted" : msg.sender === "bot" ? "bg-primary/10" : "bg-accent/10"
                )}
              >
                {msg.sender === "customer" && <User className="h-3.5 w-3.5 text-muted-foreground" />}
                {msg.sender === "bot" && <Bot className="h-3.5 w-3.5 text-primary" />}
                {msg.sender === "admin" && <Shield className="h-3.5 w-3.5 text-accent" />}
              </div>
              <div
                className={cn(
                  "rounded-xl px-3 py-2 text-sm",
                  msg.sender === "customer"
                    ? "bg-muted text-foreground"
                    : msg.sender === "bot"
                    ? "bg-primary/10 text-foreground"
                    : "gradient-primary text-primary-foreground"
                )}
              >
                <p>{msg.content}</p>
                <p className="text-[10px] opacity-60 mt-1">{msg.timestamp}</p>
              </div>
            </div>
          ))}
        </CardContent>

        <div className="p-4 border-t border-border">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!reply.trim()) return;
              setReply("");
            }}
            className="flex gap-2"
          >
            <Input
              placeholder="Ketik balasan sebagai admin..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon" className="gradient-primary">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
