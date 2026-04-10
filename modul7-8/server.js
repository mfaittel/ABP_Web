const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Database Sementara (Data Mahasiswa)
let dataMahasiswa = [
    { id: 1, nim: "2311102310", nama: "Muhammad Faizul Humam", jurusan: "Teknik Informatika", ipk: 3.85 },
];

// READ: Semua Data
app.get('/api/mahasiswa', (req, res) => {
    res.json({ data: dataMahasiswa });
});

// READ: Satu Data
app.get('/api/mahasiswa/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const mhs = dataMahasiswa.find(m => m.id === id);
    if (mhs) res.json(mhs);
    else res.status(404).json({ message: "Data tidak ditemukan" });
});

// CREATE: Tambah Data
app.post('/api/mahasiswa', (req, res) => {
    const { nim, nama, jurusan, ipk } = req.body;
    const newId = dataMahasiswa.length > 0 ? dataMahasiswa[dataMahasiswa.length - 1].id + 1 : 1;
    const newMhs = { id: newId, nim, nama, jurusan, ipk: parseFloat(ipk) };
    dataMahasiswa.push(newMhs);
    res.json({ status: "success", message: "Data mahasiswa berhasil ditambahkan!" });
});

// UPDATE: Ubah Data
app.put('/api/mahasiswa/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { nim, nama, jurusan, ipk } = req.body;
    const index = dataMahasiswa.findIndex(m => m.id === id);
    
    if (index !== -1) {
        dataMahasiswa[index] = { id, nim, nama, jurusan, ipk: parseFloat(ipk) };
        res.json({ status: "success", message: "Data mahasiswa berhasil diupdate!" });
    } else {
        res.status(404).json({ message: "Data tidak ditemukan" });
    }
});

// DELETE: Hapus Data
app.delete('/api/mahasiswa/:id', (req, res) => {
    const id = parseInt(req.params.id);
    dataMahasiswa = dataMahasiswa.filter(m => m.id !== id);
    res.json({ status: "success", message: "Data mahasiswa berhasil dihapus!" });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});