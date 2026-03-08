import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const dailyChats = [
  { day: "Sen", chats: 42 },
  { day: "Sel", chats: 56 },
  { day: "Rab", chats: 38 },
  { day: "Kam", chats: 67 },
  { day: "Jum", chats: 55 },
  { day: "Sab", chats: 89 },
  { day: "Min", chats: 73 },
];

const responseTime = [
  { hour: "08", time: 1.5 },
  { hour: "10", time: 1.2 },
  { hour: "12", time: 2.1 },
  { hour: "14", time: 1.8 },
  { hour: "16", time: 1.1 },
  { hour: "18", time: 0.9 },
  { hour: "20", time: 1.3 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground text-sm">Statistik performa chatbot</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Chat per Hari</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={dailyChats}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="day" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Bar dataKey="chats" fill="hsl(230, 75%, 55%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Response Time (detik)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={responseTime}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="hour" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Line type="monotone" dataKey="time" stroke="hsl(142, 65%, 42%)" strokeWidth={2} dot={{ fill: "hsl(142, 65%, 42%)" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
