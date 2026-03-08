import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Clock, Bot, TrendingUp, Star } from "lucide-react";
import { mockStats, mockConversations } from "@/lib/mock-data";

const statCards = [
  { label: "Total Conversations", value: mockStats.totalConversations.toLocaleString(), icon: MessageSquare, change: "+12%" },
  { label: "Active Chats", value: mockStats.activeChats, icon: Users, change: "+3" },
  { label: "Resolved Today", value: mockStats.resolvedToday, icon: TrendingUp, change: "+18%" },
  { label: "Avg Response Time", value: mockStats.avgResponseTime, icon: Clock, change: "-0.3s" },
  { label: "Bot Accuracy", value: `${mockStats.botAccuracy}%`, icon: Bot, change: "+2%" },
  { label: "Satisfaction", value: `${mockStats.customerSatisfaction}/5`, icon: Star, change: "+0.1" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Overview performa chatbot miman.id</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statCards.map((stat) => (
          <Card key={stat.label} className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-accent mt-1">{stat.change} dari kemarin</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Percakapan Terbaru</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockConversations.slice(0, 5).map((conv) => (
              <div key={conv.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm text-foreground">{conv.customerName}</span>
                    <Badge
                      variant={conv.status === "active" ? "default" : conv.status === "resolved" ? "secondary" : "outline"}
                      className="text-[10px] px-1.5 py-0"
                    >
                      {conv.status}
                    </Badge>
                    {conv.unread > 0 && (
                      <span className="gradient-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate mt-0.5">{conv.lastMessage}</p>
                </div>
                <span className="text-xs text-muted-foreground ml-4 shrink-0">{conv.timestamp}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
