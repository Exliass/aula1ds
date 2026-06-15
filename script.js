* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: monospace;
}

body {
    background: #121212;
    color: #bcbcbc;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.crate {
    background: #1a1a1a;
    padding: 40px 30px;
    max-width: 450px;
    width: 100%;
    border: 1px solid #333;
    box-shadow: 10px 10px 0px #000; /* Sombra sólida estilo retrô */
}

header {
    margin-bottom: 30px;
}

h1 {
    font-size: 1.5rem;
    color: #ededed;
    letter-spacing: -1px;
    margin-bottom: 5px;
}

.description {
    font-size: 0.8rem;
    line-height: 1.4;
    opacity: 0.6;
}

.pad-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 25px;
}

.pad {
    background: #222;
    color: #a5a5a5;
    border: 1px solid #444;
    padding: 20px;
    font-size: 0.9rem;
    text-align: left;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
}

/* Estado ativo/pressionado bem sutil e cru */
.pad:hover {
    background: #2a2a2a;
    color: #fff;
    border-color: #666;
}

.pad.active {
    background: #ededed;
    color: #121212;
    transform: translate(2px, 2px);
}

.status {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.4;
}
