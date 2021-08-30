export default function TopBar () {
    
    const refresh = () => {
        window.location.reload();
    }

    return (
        <div class="top-bar">
            <div class="top-bar-content">
                <h1 class="font-weight-400 font-righteous" onClick={refresh}>DrivenEats</h1>
                <h2 class="font-weight-400">Sua comida em 6 minutos</h2>
            </div>
        </div>
    );
}