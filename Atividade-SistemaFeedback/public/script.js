async function carregarFeedbacks() {
    const container = document.getElementById('feedbacks-container');
    
    // Verifica se o container existe na página atual antes de tentar preenchê-lo
    if (!container) return;

    try {
        const response = await fetch('/api/feedbacks');
        
        if (!response.ok) throw new Error('Erro ao buscar dados do servidor');
        
        const feedbacks = await response.json();
        
        // Caso não haja feedbacks
        if (feedbacks.length === 0) {
            container.innerHTML = '<p>Nenhum feedback encontrado.</p>';
            return;
        }

        // Renderiza a lista
        container.innerHTML = feedbacks.map(f => `
            <div class="feedback-card" style="border: 1px solid #ddd; margin-bottom: 10px; padding: 10px; border-radius: 5px;">
                <strong>${escapeHTML(f.nome)}</strong>
                <p>${escapeHTML(f.comentario)}</p>
                <form action="/feedbacks/remover" method="POST">
                    <input type="hidden" name="id" value="${f.id}">
                    <button type="submit" style="background: #ff4d4d; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px;">
                        Remover
                    </button>
                </form>
            </div>
        `).join('');

    } catch (erro) {
        console.error("Erro ao carregar feedbacks:", erro);
        container.innerHTML = '<p style="color: red;">Erro ao carregar a lista de feedbacks.</p>';
    }
}

// Função auxiliar para evitar ataques XSS (impede que usuários injetem scripts via formulário)
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function(m) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[m];
    });
}

// Executa apenas uma vez quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', carregarFeedbacks);