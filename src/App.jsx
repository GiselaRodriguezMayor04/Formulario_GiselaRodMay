// Importaciones necesarias para el funcionamiento del formulario, incluyendo componentes de Material-UI y React.
import React, { useState } from 'react'
import {Button, Typography, Box, Paper, TextField, Container, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, MenuItem, InputLabel, Select, Divider,  Rating, FormGroup, Checkbox, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Chip, Stack} from '@mui/material'
import Grid from '@mui/material/Grid2'

function Formulario() {
  // Estado inicial del formulario
  const initialData = { name: '', apellido: '', age: '', languaje: '', rating: 0, check: false, genero: '' }
  const [data, setData] = useState(initialData) 
  const [open, setOpen] = useState(false) 

  // Manejador del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault() 
    console.log(data) 
  }

  // Manejadores para actualizar cada campo individualmente en el estado
  const handleChangeName = (e) => {
    setData({ ...data, name: e.target.value }) 
    console.log(data.name)
  }

  const handleChangeApellido = (e) => {
    setData({ ...data, apellido: e.target.value }) 
    console.log(data.apellido)
  }

  const handleChangeAge = (e) => {
    setData({ ...data, age: e.target.value }) 
    console.log(data.age)
  }

  const handleChangeLanguaje = (e) => {
    setData({ ...data, languaje: e.target.value }) 
    console.log(data.languaje)
  }

  const handleChangeRating = (newValue) => {
    setData({ ...data, rating: newValue })
  }

  const handleChangeCheck = (e) => {
    setData({ ...data, check: e.target.checked }) 
  }

  const handleChangeGenero = (e) => {
    setData({ ...data, genero: e.target.value }) 
  }

  // Función para limpiar todos los campos y restaurar el estado inicial
  const handleClear = () => {
    setData(initialData)
  }

  // Función para abrir el diálogo de confirmación
  const dialogo = () => {
    setOpen(true)
  }

  // Función para cerrar el diálogo de confirmación
  const handleClose = () => {
    setOpen(false)
  }

  // Renderizado del componente
  return (
    <>
      <Container sx={{ marginBottom: "70px" }}>
        <Paper elevation={3} square={true} sx={{ textAlign: 'center' }}>
          <Box sx={{ padding: "20px" }}
            component='form'
            onSubmit={handleSubmit} 
          >
            <Grid container spacing={2}>
              {/* Campo de texto para el nombre */}
              <Grid size={{ xs: 12, sm: 5, md: 5 }}>
                <TextField
                  required
                  label='Nombre'
                  variant='outlined'
                  fullWidth
                  value={data.name}
                  onChange={handleChangeName}
                />
              </Grid>
              {/* Campo de texto para el apellido */}
              <Grid size={{ xs: 12, sm: 5, md: 5 }}>
                <TextField
                  required
                  label='Apellidos'
                  variant='outlined'
                  fullWidth
                  value={data.apellido}
                  onChange={handleChangeApellido}
                />
              </Grid>
              {/* Campo de texto para la edad */}
              <Grid size={{ xs: 12, sm: 2, md: 2 }}>
                <TextField
                  required
                  label='Edad'
                  variant='outlined'
                  fullWidth
                  value={data.age}
                  onChange={handleChangeAge}
                />
              </Grid>

              {/* Grupo de botones de opción para seleccionar el género */}
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">Género</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="femenino"
                    name="radio-buttons-group"
                    value={data.genero}
                    onChange={handleChangeGenero}
                  >
                    <FormControlLabel value="femenino" control={<Radio />} label="Femenino" />
                    <FormControlLabel value="masculino" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="otro" control={<Radio />} label="Otro" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              {/* Selector desplegable para elegir lenguaje de programación */}
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Lenguaje de programación aprendido</InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={data.languaje}
                    label="Lenguaje de programación favorito"
                    onChange={handleChangeLanguaje}
                  >
                    <MenuItem value={"Javascript"}>Javascript</MenuItem>
                    <MenuItem value={"Java"}>Java</MenuItem>
                    <MenuItem value={"Python"}>Python</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            
            {/* Separador visual */}
            <Divider />

            {/* Sección de evaluación de la encuesta */}
            <Grid container spacing={2}>
              <Grid>
                <Typography component="legend">Puntúa esta encuesta</Typography>
              </Grid>
              <Grid>
                <Rating
                  name="simple-controlled"
                  value={data.rating}
                  onChange={(event, newValue) => {
                    handleChangeRating(newValue)
                  }}
                />
              </Grid>
            </Grid>

            {/* Checkbox para aceptar términos y condiciones */}
            <Grid>
              <FormGroup>
                <FormControlLabel
                  id='check'
                  control={<Checkbox checked={data.check} />}
                  onChange={handleChangeCheck}
                  label="Aceptar términos y condiciones"
                />
              </FormGroup>
            </Grid>

            {/* Diálogo de confirmación al enviar */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle>{"Confirmación"}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  ¿Estás seguro de mandar la encuesta?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleClose} autoFocus>Sí</Button>
              </DialogActions>
            </Dialog>

            {/* Botones para enviar y limpiar el formulario */}
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <Button disabled={!data.check} id='but' onClick={dialogo} type="submit" variant='contained' fullWidth>Enviar</Button>
              </Grid>
              <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                <Button type="button" onClick={handleClear} variant='outlined' fullWidth>Limpiar</Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </>
  );
}

export default Formulario
