# @cakadi190/react-multicontext-loader

`@cakadi190/react-multicontext-loader` adalah sebuah React package sederhana yang memungkinkan Anda untuk membungkus banyak context provider dengan mudah dalam aplikasi React Anda.

---

## Fitur

- **Dukungan untuk JSX dan TSX**: Ditulis menggunakan TypeScript untuk dukungan penuh terhadap tipe.
- **Kemudahan Penggunaan**: Mudah digunakan untuk membungkus berbagai context provider.
- **Reusable**: Dapat digunakan di berbagai aplikasi React tanpa konfigurasi tambahan.

---

## Instalasi

Gunakan npm atau yarn untuk menginstal package:

```bash
npm install @cakadi190/react-multicontext-loader
```

atau

```bash
yarn add @cakadi190/react-multicontext-loader
```

---

## Penggunaan

Berikut adalah contoh cara menggunakan `MultiContextProvider`:

### Membungkus Context Provider

```tsx
import React from "react";
import MultiContextProvider from "@cakadi190/react-multicontext-loader";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <MultiContextProvider contexts={[ThemeProvider, AuthProvider]}>
      <YourComponent />
    </MultiContextProvider>
  );
};

export default App;
```

### Props

| Prop       | Tipe                            | Deskripsi                                              |
| ---------- | ------------------------------- | ------------------------------------------------------ |
| `contexts` | `FC<{ children: ReactNode }>[]` | Array dari context provider yang akan dibungkus.       |
| `children` | `ReactNode`                     | Elemen anak yang akan dirender dalam context provider. |

---

## API

### `MultiContextProvider`

`MultiContextProvider` adalah komponen utama dalam package ini. Ia menerima daftar context provider melalui properti `contexts` dan membungkus elemen anaknya dengan semua provider tersebut.

#### Contoh Sederhana

```tsx
import React from "react";
import MultiContextProvider from "@cakadi190/react-multicontext-loader";

const Context1 = ({ children }: { children: React.ReactNode }) => {
  return <div className="context1">{children}</div>;
};

const Context2 = ({ children }: { children: React.ReactNode }) => {
  return <div className="context2">{children}</div>;
};

const App = () => {
  return (
    <MultiContextProvider contexts={[Context1, Context2]}>
      <h1>Hello, World!</h1>
    </MultiContextProvider>
  );
};

export default App;
```

---

## Pengembangan

### Build Package

Jalankan perintah berikut untuk membangun package:

```bash
npm run build
```

### Testing

Gunakan proyek React baru untuk menguji package. Pastikan semua context provider bekerja seperti yang diharapkan.

---

## Lisensi

MIT License. Silakan lihat file `LICENSE` untuk detail lebih lanjut.
