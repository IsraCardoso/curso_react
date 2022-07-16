import React from 'react'
import style from './CarDetails.module.css'

const CarDetails = () => {

  const cars =[
    {id: 1, marca: 'Ford', modelo: 'Mustang', ano: '2019' },
    {id: 2, marca: 'Chevrolet', modelo: 'Camaro', ano: '2019'},
    {id: 3, marca: 'Fiat', modelo: 'Uno', ano: '2019'},
]

  return (
    <>
    <h1 className={style.my_style}>CarDetails</h1>
    {cars.map((car)=>(
      <div>
        <h2>ID: {car.id}</h2>
        <h2>Marca: {car.marca}</h2>
        <h2>Modelo: {car.modelo}</h2>
        <h2>Ano: {car.ano}</h2>
        <p>_____________________________________________</p> 
      </div>
    ))} 
    </>
  )
}

export default CarDetails