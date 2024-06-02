export function Factura({ factura }) {
    let subtotal = 0;
    const iva = 0.16; // 16% IVA
    let total = 0;

    factura.forEach(item => {
        const itemSubtotal = item.valorUnitario * item.cantidad;
        subtotal += itemSubtotal;
    });

    const ivaAmount = subtotal * iva;
    total = subtotal + ivaAmount;

    return (
        <div className="factura">
            <div>
                <p>Subtotal: {subtotal.toFixed(2)}</p>
                <p>IVA (16%): {ivaAmount.toFixed(2)}</p>
                <p>Total: {total.toFixed(2)}</p>
            </div>
        </div>
    );
}
