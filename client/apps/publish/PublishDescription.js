import React from 'react'

export default class PublishDescription extends React.Component {
  render() {
    return (
      <div className='border rounded mb-3'>
        <p className='h5 border-bottom p-2'>Detalles</p>
        <div className='p-2'>
          <textarea className='form-control' rows='5' placeholder={this.getPlaceholderText()}/>
        </div>
      </div>
    );
  }

  getPlaceholderText() {
    return `Información adicional para los pasajeros:
  - Detalles del lugar de salida/destino
  - ¿Tienes flexibilidad con el lugar de salida/destino?
  - ¿Planificas hacer parada de baño o comida?
  - ¿Piensas tomar ruta alterna?`;
  }
}
