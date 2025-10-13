"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Printer, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n/language-context"
import Image from "next/image"

interface PrintOrderModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PrintOrderModal({ open, onOpenChange }: PrintOrderModalProps) {
  const { t, language } = useLanguage()

  const handlePrint = () => {
    window.print()
  }

  const orderData = {
    pt: {
      title: "COMPROVANTE DE ENTRADA INTERNO - PERFORMANCE OPTIMIZATION",
      subtitle: "ORDEMLY",
      date: "07/10/2025",
      time: "05:47",
      clientInfo: {
        title: "INFORMAÇÕES DO CLIENTE",
        name: "Augustus Kutch",
        neighborhood: "UF",
        city: "Cidade",
        phone: "Tel",
      },
      equipmentInfo: {
        title: "INFORMAÇÕES DO EQUIPAMENTO",
        brand: "Samsung",
        model: "Notebook 9",
        serial: "DGXR91SF4EEG",
        observation: "Aenean ligula eget conubia. Sugerio enim officia. Albus capillus ruteo tempuum sollus.",
      },
      serviceConditions: {
        title: "CONDIÇÕES DE SERVIÇO",
        items: [
          "O Dono do N° 1 e 2 têm úteis, um técnico irá iniciar o diagnóstico do equipamento",
          "Com o diagnóstico completo, a Acori entrará em contato para informar as condições e valores do serviço.",
          "Após a aprovação do equipamento, reparado ou não, o cliente terá o prazo máximo de 15 dias para retirá-lo.",
          "O equipamento não retirado no prazo de 30 dias após a notificação será considerado abandonado e será entregue para pagar os custos de manutenção ou descartado, e restará uma semana com a O.S.",
        ],
      },
      problemReported: {
        title: "PROBLEMA RELATADO",
        description:
          "Angelus ustilo cribro suffoco ver basium. Velit vinum comes antea adsum comitatus avarus vilicus coniuratio. Autem catena veniam.",
      },
      signature: {
        title: "ASSINATURA DO CLIENTE",
        name: "Augustus Kutch",
      },
    },
    en: {
      title: "INTERNAL ENTRY RECEIPT - PERFORMANCE OPTIMIZATION",
      subtitle: "ORDEMLY",
      date: "10/07/2025",
      time: "05:47",
      clientInfo: {
        title: "CLIENT INFORMATION",
        name: "Augustus Kutch",
        neighborhood: "State",
        city: "City",
        phone: "Phone",
      },
      equipmentInfo: {
        title: "EQUIPMENT INFORMATION",
        brand: "Samsung",
        model: "Notebook 9",
        serial: "DGXR91SF4EEG",
        observation: "Aenean ligula eget conubia. Sugerio enim officia. Albus capillus ruteo tempuum sollus.",
      },
      serviceConditions: {
        title: "SERVICE CONDITIONS",
        items: [
          "Within 1 to 2 business days, a technician will begin diagnosing the equipment",
          "Once the diagnosis is complete, Acori will contact you to inform the conditions and service costs.",
          "After equipment approval, repaired or not, the customer will have a maximum of 15 days to pick it up.",
          "Equipment not picked up within 30 days after notification will be considered abandoned and will be delivered to pay maintenance costs or discarded, with one week remaining with the S.O.",
        ],
      },
      problemReported: {
        title: "REPORTED PROBLEM",
        description:
          "Angelus ustilo cribro suffoco ver basium. Velit vinum comes antea adsum comitatus avarus vilicus coniuratio. Autem catena veniam.",
      },
      signature: {
        title: "CLIENT SIGNATURE",
        name: "Augustus Kutch",
      },
    },
    es: {
      title: "COMPROBANTE DE ENTRADA INTERNO - OPTIMIZACIÓN DE RENDIMIENTO",
      subtitle: "ORDEMLY",
      date: "07/10/2025",
      time: "05:47",
      clientInfo: {
        title: "INFORMACIÓN DEL CLIENTE",
        name: "Augustus Kutch",
        neighborhood: "Estado",
        city: "Ciudad",
        phone: "Teléfono",
      },
      equipmentInfo: {
        title: "INFORMACIÓN DEL EQUIPO",
        brand: "Samsung",
        model: "Notebook 9",
        serial: "DGXR91SF4EEG",
        observation: "Aenean ligula eget conubia. Sugerio enim officia. Albus capillus ruteo tempuum sollus.",
      },
      serviceConditions: {
        title: "CONDICIONES DE SERVICIO",
        items: [
          "Dentro de 1 a 2 días hábiles, un técnico comenzará a diagnosticar el equipo",
          "Una vez completado el diagnóstico, Acori se pondrá en contacto para informar las condiciones y costos del servicio.",
          "Después de la aprobación del equipo, reparado o no, el cliente tendrá un máximo de 15 días para recogerlo.",
          "El equipo no recogido dentro de los 30 días posteriores a la notificación se considerará abandonado y se entregará para pagar los costos de mantenimiento o se descartará, quedando una semana con la O.S.",
        ],
      },
      problemReported: {
        title: "PROBLEMA REPORTADO",
        description:
          "Angelus ustilo cribro suffoco ver basium. Velit vinum comes antea adsum comitatus avarus vilicus coniuratio. Autem catena veniam.",
      },
      signature: {
        title: "FIRMA DEL CLIENTE",
        name: "Augustus Kutch",
      },
    },
  }

  const data = orderData[language as keyof typeof orderData]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto print:max-w-full print:max-h-full">
        <DialogHeader className="print:hidden">
          <DialogTitle className="flex items-center justify-between">
            <span>{data.title}</span>
            <div className="flex items-center gap-2">
              <Button size="sm" onClick={handlePrint}>
                <Printer className="w-4 h-4 mr-2" />
                {language === "pt" ? "Imprimir" : language === "en" ? "Print" : "Imprimir"}
              </Button>
              <Button size="sm" variant="ghost" onClick={() => onOpenChange(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Print Content */}
        <div className="bg-white text-black p-8 print:p-12">
          {/* Header */}
          <div className="border-2 border-black p-4 mb-6">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <Image src="/logo.jpeg" alt="Ordemly Logo" width={48} height={48} className="rounded" />
                <div>
                  <h1 className="font-bold text-sm leading-tight">{data.title}</h1>
                  <p className="font-bold text-sm">{data.subtitle}</p>
                  <p className="text-xs mt-1">ordemly.com</p>
                </div>
              </div>
              <div className="text-right text-xs">
                <p>
                  <strong>Data:</strong> {data.date}
                </p>
                <p>
                  <strong>Hora:</strong> {data.time}
                </p>
                <p className="mt-2">
                  <strong>Telefone:</strong>
                </p>
                <p>
                  <strong>E-mail:</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Client Info */}
            <div className="border-2 border-black p-3">
              <h2 className="font-bold text-xs mb-2">{data.clientInfo.title}</h2>
              <div className="text-xs space-y-1">
                <p>
                  <strong>Nome:</strong> {data.clientInfo.name}
                </p>
                <p>
                  <strong>Bairro:</strong> {data.clientInfo.neighborhood}
                </p>
                <p>
                  <strong>Cidade:</strong> {data.clientInfo.city}
                </p>
                <p>
                  <strong>Tel:</strong> {data.clientInfo.phone}
                </p>
              </div>
            </div>

            {/* Service Conditions */}
            <div className="border-2 border-black p-3 row-span-2">
              <h2 className="font-bold text-xs mb-2">{data.serviceConditions.title}</h2>
              <ol className="text-xs space-y-1 list-decimal list-inside">
                {data.serviceConditions.items.map((item, index) => (
                  <li key={index} className="leading-tight">
                    {item}
                  </li>
                ))}
              </ol>
            </div>

            {/* Equipment Info */}
            <div className="border-2 border-black p-3">
              <h2 className="font-bold text-xs mb-2">{data.equipmentInfo.title}</h2>
              <div className="text-xs space-y-1">
                <p>
                  <strong>Marca:</strong> {data.equipmentInfo.brand}
                </p>
                <p>
                  <strong>Modelo:</strong> {data.equipmentInfo.model}
                </p>
                <p>
                  <strong>N° Série:</strong> {data.equipmentInfo.serial}
                </p>
                <p className="mt-2">
                  <strong>Observação:</strong> {data.equipmentInfo.observation}
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="border-2 border-black p-3 mb-4">
            <h2 className="font-bold text-xs mb-2">INFORMAÇÕES ADICIONAIS</h2>
            <div className="text-xs space-y-1">
              <p>Data de entrada: 07/10/2025</p>
              <p>Hora: 05:47</p>
              <p>Status do pedido: In Progress</p>
              <p>Técnico Responsável: Marcel Moen</p>
              <div className="flex items-center gap-4 mt-2">
                <label className="flex items-center gap-2">
                  <input type="radio" checked readOnly />
                  <span>Nota Empresarial</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" readOnly />
                  <span>Nota do Cliente</span>
                </label>
              </div>
            </div>
          </div>

          {/* Problem Reported */}
          <div className="border-2 border-black p-3 mb-4">
            <h2 className="font-bold text-xs mb-2">{data.problemReported.title}</h2>
            <p className="text-xs leading-relaxed">{data.problemReported.description}</p>
          </div>

          {/* Signature */}
          <div className="border-2 border-black p-3">
            <h2 className="font-bold text-xs mb-8">{data.signature.title}</h2>
            <div className="border-t-2 border-black pt-1 text-center">
              <p className="text-xs">{data.signature.name}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
