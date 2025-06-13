import express from 'express'
import notesRoutes from './router/notesRoutes.js'

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/api/notes', notesRoutes)

// app.get('/api/data', (req,res) => {
//     res.send('These are the datas');
// });

// app.post('api/data', (res, req) => {
//     res.status(201).json({
//         message: 'Data created successfully'
//     });
// });

// app.put('/api/data/:id', (res,req) => {
//     res.status(200).json({
//         message: `Data with ID ${req.params.id} updated successfully`
//     });
// });

// app.delete('/api/data/:id', (res,req) => {
//     res.status(200).json({
//         message: `Data with ID ${req.params.id} deleted successfully`
//     });
// });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    }
);
