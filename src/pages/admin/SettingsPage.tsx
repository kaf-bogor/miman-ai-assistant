import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm">Pengaturan akun dan integrasi</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Profil Toko</CardTitle>
            <CardDescription>Informasi dasar toko online Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">Nama Toko</label>
              <Input defaultValue="Toko Miman" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input defaultValue="admin@miman.id" type="email" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">No. WhatsApp</label>
              <Input defaultValue="+6281234567890" className="mt-1" />
            </div>
            <Button className="gradient-primary text-primary-foreground w-full">Simpan Profil</Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-base">Notifikasi</CardTitle>
            <CardDescription>Kelola preferensi notifikasi</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Email Notifikasi</p>
                <p className="text-xs text-muted-foreground">Terima notifikasi via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Chat Eskalasi</p>
                <p className="text-xs text-muted-foreground">Notif saat bot eskalasi ke admin</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Laporan Harian</p>
                <p className="text-xs text-muted-foreground">Ringkasan performa harian</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">API Keys</CardTitle>
            <CardDescription>Kelola API key untuk integrasi</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground">OpenClaw API Key</label>
              <Input defaultValue="sk-oc-••••••••••••" type="password" className="mt-1" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">WhatsApp Business API</label>
              <Input defaultValue="wa-••••••••••••" type="password" className="mt-1" />
            </div>
            <Button variant="outline" className="w-full">Update API Keys</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
