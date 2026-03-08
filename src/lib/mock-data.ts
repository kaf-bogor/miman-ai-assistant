export interface Conversation {
  id: string;
  customerName: string;
  customerPhone: string;
  lastMessage: string;
  timestamp: string;
  status: "active" | "resolved" | "pending";
  unread: number;
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: string;
  sender: "customer" | "bot" | "admin";
  content: string;
  timestamp: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  totalConversations: number;
  lastActive: string;
  status: "active" | "inactive";
}

export const mockConversations: Conversation[] = [
  {
    id: "1",
    customerName: "Budi Santoso",
    customerPhone: "+6281234567890",
    lastMessage: "Apakah produk ini masih tersedia?",
    timestamp: "2 menit lalu",
    status: "active",
    unread: 3,
    messages: [
      { id: "m1", sender: "customer", content: "Halo, saya mau tanya produk Kaos Premium", timestamp: "10:30" },
      { id: "m2", sender: "bot", content: "Halo Kak Budi! 👋 Terima kasih sudah menghubungi kami. Kaos Premium tersedia dalam ukuran S, M, L, XL. Harga Rp 150.000. Mau order yang ukuran apa kak?", timestamp: "10:30" },
      { id: "m3", sender: "customer", content: "Ukuran L ada warna apa aja?", timestamp: "10:32" },
      { id: "m4", sender: "bot", content: "Untuk ukuran L tersedia warna: Hitam, Putih, Navy, dan Maroon. Mau pilih yang mana kak? 😊", timestamp: "10:32" },
      { id: "m5", sender: "customer", content: "Apakah produk ini masih tersedia?", timestamp: "10:35" },
    ],
  },
  {
    id: "2",
    customerName: "Siti Rahayu",
    customerPhone: "+6289876543210",
    lastMessage: "Baik, terima kasih infonya",
    timestamp: "15 menit lalu",
    status: "resolved",
    unread: 0,
    messages: [
      { id: "m1", sender: "customer", content: "Berapa ongkir ke Jakarta?", timestamp: "09:15" },
      { id: "m2", sender: "bot", content: "Ongkir ke Jakarta mulai dari Rp 12.000 ya kak, tergantung ekspedisi yang dipilih. Ada JNE, J&T, dan SiCepat. Mau pakai yang mana?", timestamp: "09:15" },
      { id: "m3", sender: "customer", content: "Baik, terima kasih infonya", timestamp: "09:20" },
    ],
  },
  {
    id: "3",
    customerName: "Ahmad Rizki",
    customerPhone: "+6285555123456",
    lastMessage: "Bisa COD ga?",
    timestamp: "1 jam lalu",
    status: "pending",
    unread: 1,
    messages: [
      { id: "m1", sender: "customer", content: "Halo min, mau order dong", timestamp: "08:00" },
      { id: "m2", sender: "bot", content: "Halo Kak Ahmad! Silakan pilih produk yang mau diorder ya 😊 Bisa kirim nama produknya?", timestamp: "08:00" },
      { id: "m3", sender: "customer", content: "Bisa COD ga?", timestamp: "08:05" },
    ],
  },
  {
    id: "4",
    customerName: "Dewi Lestari",
    customerPhone: "+6281999888777",
    lastMessage: "Sudah transfer ya kak",
    timestamp: "3 jam lalu",
    status: "active",
    unread: 2,
    messages: [
      { id: "m1", sender: "customer", content: "Mau order Hoodie Basic ukuran M", timestamp: "06:00" },
      { id: "m2", sender: "bot", content: "Hoodie Basic ukuran M, harga Rp 250.000. Total dengan ongkir Rp 262.000. Silakan transfer ke BCA 1234567890 a.n Toko Miman ya kak!", timestamp: "06:01" },
      { id: "m3", sender: "customer", content: "Sudah transfer ya kak", timestamp: "06:30" },
    ],
  },
  {
    id: "5",
    customerName: "Eko Prasetyo",
    customerPhone: "+6282111222333",
    lastMessage: "Kapan barangnya sampai?",
    timestamp: "5 jam lalu",
    status: "pending",
    unread: 1,
    messages: [
      { id: "m1", sender: "customer", content: "Kapan barangnya sampai?", timestamp: "04:00" },
    ],
  },
];

export const mockCustomers: Customer[] = [
  { id: "1", name: "Budi Santoso", phone: "+6281234567890", totalConversations: 12, lastActive: "2 menit lalu", status: "active" },
  { id: "2", name: "Siti Rahayu", phone: "+6289876543210", totalConversations: 5, lastActive: "15 menit lalu", status: "active" },
  { id: "3", name: "Ahmad Rizki", phone: "+6285555123456", totalConversations: 3, lastActive: "1 jam lalu", status: "active" },
  { id: "4", name: "Dewi Lestari", phone: "+6281999888777", totalConversations: 8, lastActive: "3 jam lalu", status: "active" },
  { id: "5", name: "Eko Prasetyo", phone: "+6282111222333", totalConversations: 2, lastActive: "5 jam lalu", status: "inactive" },
];

export const mockStats = {
  totalConversations: 1247,
  activeChats: 23,
  resolvedToday: 89,
  avgResponseTime: "1.2s",
  botAccuracy: 94,
  customerSatisfaction: 4.7,
};
