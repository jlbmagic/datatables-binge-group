//Here we're importing items we'll need. You can add other imports here.

let table;
// exposing loadData to FileMaker Script
window.loadData = function (json) {
  // TODO: Load the DataTables libraries by linking to the DataTables CDN.
  //TODO: Get data from FileMaker
  //TODO: prep it for the JS.

  //TODO: create the columns.

  //TODO: Explore options of Datatables
  //https://datatables.net/reference/option/
  //https://datatables.net/examples/index
  // Create the DataTable, after destroying it if already exists
  table = $("#dtable").DataTable({
    pageLength: 20,
    colReorder: true,
    columns: [
      { title: "First Name", data: "firstName", orderable: false },
      { title: "First Name", data: "lastName" },
      { title: "ID", data: "id", visible: true, width: "10px" },
    ],
    data: [
      { firstName: "John", lastName: "Brown", id: 123 },
      { firstName: "Jane", lastName: "Doe", id: 456 },
      { firstName: "Mary", lastName: "Blige", id: 789 },
    ],
  });
};
