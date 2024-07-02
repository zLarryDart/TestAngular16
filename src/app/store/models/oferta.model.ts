export interface Oferta {
  success: number
  content: ContentOferta[]
  mensaje: string
}

export interface ContentOferta {
  id: number
  nombre?: string
  marca: string
  descripcion?: string
  detalles: string
  peso?: string
  ancho?: string
  alto?: string
  largo?: string
  imagen?: string
  elementos_recomendados: number
  fecha_registro: string
  sku: string
  activo: number
  convertida: number
  unique_id: string
  marca_autoparte: any
  subsubcategoria: any
}
