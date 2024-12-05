// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
  language: {
    lengthMenu: "Mostrar _MENU_ registros por página";
    zeroRecords: "No se encontraron resultados";
    info: "Mostrando _START_ a _END_ de _TOTAL_ registros";
    infoEmpty: "Mostrando 0 a 0 de 0 registros";
    infoFiltered: "(filtrado de _MAX_ registros totales)";
    search: "Buscar:";
    paginate: {
        first: "Primero";
        last: "Último";
        next: "Siguiente";
        previous: "Anterior"
    };
    aria: {
        sortAscending: ": activar para ordenar la columna ascendente";
        sortDescending: ": activar para ordenar la columna descendente"
    }
}
});
