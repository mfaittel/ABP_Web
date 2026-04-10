$(document).ready(function() {
    
    // 1. Inisialisasi DataTables
    if ($('#tabelData').length) {
        $('#tabelData').DataTable({
            "ajax": "/api/mahasiswa", 
            "columns": [
                { "data": "id" },
                { "data": "nim" },
                { "data": "nama" },
                { "data": "jurusan" },
                { "data": "ipk" },
                { 
                    "data": null,
                    "render": function (data, type, row) {
                        return `
                            <button class="btn btn-sm btn-warning btn-edit" data-id="${row.id}">Edit</button>
                            <button class="btn btn-sm btn-danger btn-delete" data-id="${row.id}">Hapus</button>
                        `;
                    }
                }
            ]
        });
    }

    // 2. Ke Form Edit
    $(document).on('click', '.btn-edit', function() {
        const id = $(this).data('id');
        window.location.href = `form.html?id=${id}`;
    });

    // 3. Hapus Data
    $(document).on('click', '.btn-delete', function() {
        const id = $(this).data('id');
        if(confirm('Yakin ingin menghapus data mahasiswa ini?')) {
            $.ajax({
                url: `/api/mahasiswa/${id}`,
                type: 'DELETE',
                success: function(response) {
                    alert(response.message);
                    $('#tabelData').DataTable().ajax.reload();
                }
            });
        }
    });

    // 4. Isi Form saat Edit
    const urlParams = new URLSearchParams(window.location.search);
    const editId = urlParams.get('id');

    if (editId && $('#dataForm').length) {
        $('#formTitle').text('Edit Mahasiswa');
        $.get(`/api/mahasiswa/${editId}`, function(data) {
            $('#dataId').val(data.id);
            $('#nim').val(data.nim);
            $('#nama').val(data.nama);
            $('#jurusan').val(data.jurusan);
            $('#ipk').val(data.ipk);
        });
    }

    // 5. Submit Form (Tambah/Edit)
    $('#dataForm').submit(function(e) {
        e.preventDefault();
        
        const id = $('#dataId').val();
        const url = id ? `/api/mahasiswa/${id}` : '/api/mahasiswa';
        const method = id ? 'PUT' : 'POST';
        
        const data = {
            nim: $('#nim').val(),
            nama: $('#nama').val(),
            jurusan: $('#jurusan').val(),
            ipk: $('#ipk').val()
        };

        $.ajax({
            url: url,
            type: method,
            data: data,
            success: function(response) {
                alert(response.message);
                window.location.href = 'data.html';
            }
        });
    });
});