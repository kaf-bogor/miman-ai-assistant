import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bot, Zap, Clock } from "lucide-react";

export default function BotConfigPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Bot Config</h1>
        <p className="text-muted-foreground text-sm">Konfigurasi AI chatbot openclaw</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Bot className="h-4 w-4" /> General
            </CardTitle>
            <CardDescription>Pengaturan umum chatbot</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Nama Bot</label>
              <Input defaultValue="Miman Assistant" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Greeting Message</label>
              <Input defaultValue="Halo! 👋 Ada yang bisa saya bantu?" className="mt-1" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Auto-reply</p>
                <p className="text-xs text-muted-foreground">Bot otomatis membalas pesan</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Button className="gradient-primary text-primary-foreground w-full">Simpan</Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Zap className="h-4 w-4" /> AI Model
            </CardTitle>
            <CardDescription>Konfigurasi model AI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Provider</label>
              <div className="mt-1 flex gap-2">
                <Badge className="gradient-primary text-primary-foreground">OpenClaw</Badge>
                <Badge variant="outline">GPT-4</Badge>
                <Badge variant="outline">Claude</Badge>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Temperature</label>
              <Input type="number" defaultValue="0.7" step="0.1" min="0" max="2" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Max Tokens</label>
              <Input type="number" defaultValue="1024" className="mt-1" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Fallback to Human</p>
                <p className="text-xs text-muted-foreground">Eskalasi ke admin jika bot tidak yakin</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Clock className="h-4 w-4" /> Operating Hours
            </CardTitle>
            <CardDescription>Jam operasional bot</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground">Mulai</label>
                <Input type="time" defaultValue="08:00" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground">Selesai</label>
                <Input type="time" defaultValue="22:00" className="mt-1" />
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div>
                <p className="text-sm font-medium text-foreground">24/7 Mode</p>
                <p className="text-xs text-muted-foreground">Bot aktif sepanjang waktu</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
