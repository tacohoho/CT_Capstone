import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'joke', headerName: 'Joke', width: 1000 },
];

const rows = [
    { id: 1, joke: 'I have these weird muscle spasms in my gluteus maximus.\nI figured out from my doctor that everything was alright:\nHe said \"Weird flex, butt okay.\"' },
    { id: 2, joke: "If you're here for the yodeling lesson, please form an orderly orderly orderly queue." },
    { id: 3, joke: "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone." },
  ];

export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%'}}>
            <h2>Jokes in Collection</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}