const pt = {
  message: {
    new_connection: 'Nova Conexão',
    refresh_connection: 'Atualizar',
    edit_connection: 'Editar Conexão',
    del_connection: 'Deletar Conexão',
    close_connection: 'Encerrar Conexão',
    add_new_line: 'Adicionar nova linha',
    redis_version: 'Versão do Redis',
    process_id: 'ID do processo',
    used_memory: 'Memória utilizada',
    used_memory_peak: 'Used Memory Peak',
    used_memory_lua: 'Used Memory Lua',
    connected_clients: 'Clientes conectados',
    total_connections_received: 'Total de Conexões',
    total_commands_processed: 'Total de Comandos',
    key_statistics: 'Principais estatísticas',
    all_redis_info: 'Todas as informações do Redis',
    server: 'Servidor',
    memory: 'Memória',
    stats: 'Estatísticas',
    settings: 'Configurações',
    confirm_to_delete_row_data: 'Você deseja excluir os dados da linha?',
    delete_success: 'Deleção executada com sucesso',
    delete_failed: 'Houve uma falha na deleção',
    modify_success: 'Modificação executada com sucesso',
    modify_failed: 'Houve uma falha na modifição',
    add_success: 'Sucesso ao adicionar',
    add_failed: 'Falha ao adicionar',
    value_exists: 'Valor existente',
    refresh_success: 'Sucesso ao atualizar',
    click_enter_to_rename: 'Clique ou pressione Enter para renomear',
    click_enter_to_ttl: 'Clique ou pressione Enter para modificar TTL',
    confirm_to_delete_key: 'Você deseja deletar {key} ?',
    confirm_to_rename_key: 'Confirmar o renome {old} -> {new} ?',
    edit_line: 'Editar linha',
    auto_refresh: 'Atualização Automática',
    auto_refresh_tip: 'Interruptor de atualização automática, atualiza a cada {interval} segundo',
    key_not_exists: 'Chave não existe',
    collapse_all: 'Recolher todos',
    expand_all: 'Expandir todos',
    json_format_failed: 'Falha na análise do JSON',
    msgpack_format_failed: 'Falha na análise do Msgpack',
    php_unserialize_format_failed: 'Falha na desserialização do PHP',
    clean_up: 'Limpar',
    redis_console: 'Console do Redis',
    confirm_to_delete_connection: 'Você deseja deletar a conexão?',
    connection_exists: 'A configuração de conexão já existe',
    close_to_edit_connection: 'Você deve encerrar a conexão antes de editar',
    close_to_connection: 'Você deseja encerrar a conexão?',
    ttl_delete: 'Definir TTL <= 0 excluirá a chave diretamente',
    max_page_reached: 'Máxima página alcançada',
    add_new_key: 'Nova Chave',
    enter_new_key: 'Digite o seu novo nome de chave primeiro',
    key_type: 'Tipo da Chave',
    save: 'Salvar',
    enter_to_search: 'Tecle ENTER para procurar',
    export_success: 'Sucesso na Exportação',
    select_import_file: 'Selecione o arquivo',
    import_success: 'Sucesso na importação',
    put_file_here: 'Arraste o arquivo aqui ou clique para selecionar',
    config_connections: 'Conexões',
    import: 'Importar',
    export: 'Exportar',
    open: 'Abrir',
    close: 'Encerrar',
    open_new_tab: 'Abrir em uma nova aba',
    exact_search: 'Procura exata',
    enter_to_exec: 'Pressione Enter para comandos de execução, para cima e para baixo para alternar o histórico',
    pre_version: 'Versão',
    manual_update: 'Download manual',
    retry_too_many_times: 'Muitas tentativas de reconectar. Verifique o status do servidor',
    key_to_search: 'Pesquisa por palavra-chave',
    begin_update: 'Atualizar',
    check_update: 'Checar atualização',
    update_checking: 'Procurando por atualizações existentes, espero um momento...',
    update_available: 'Nova versão encontrada',
    update_not_available: 'A sua aplicação está na versão mais recente',
    update_error: 'Falha na atualização',
    update_downloading: 'Downloading...',
    update_download_progress: 'Download em progresso',
    update_downloaded: 'Download de atualização concluído, reinicie seu aplicativo por favor.\
    [Tips]: Se você estiver usando o Windows, depois de fechar o aplicativo, aguarde o ícone da área de trabalho para atualizar para um estado normal (cerca de 10 segundos), e então você pode reabri-lo',
    mac_not_support_auto_update: 'Mac não suporta atualização automática, faça o <a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases">download</a> e reinstale manualmente, \
    Ou execute "brew reinstall --cask another-redis-desktop-manager"\
    <br><br>🧡se for útil para você, você pode patrocinar através da <a href="https://apps.apple.com/app/id1516451072">AppStore</a>, e a AppStore irá atualizá-lo automaticamente para você.',
    font_family: 'Font Family',
    font_faq_title: 'Instruções de configuração de fonte',
    font_faq: '1. Múltiplas fontes podem ser definidas <br>\
    2. A seleção da fonte é ordenada. É sugerido escolher a fonte em inglês primeiro e depois a fonte em seu idioma<br>\
    3. Quando a lista de fontes do sistema não pode ser carregada em alguns casos excepcionais, você pode inserir o nome da fonte instalada manualmente.',
    private_key_faq: 'A chave privada de formato RSA é compatível e começa com <pre>-----BEGIN RSA PRIVATE KEY-----</pre>\
    mas se começar com<pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre>você precisa converter o formato via <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre>Esta operação não afetará o login de chave privada anterior',
    dark_mode: 'Modo noturno',
    load_more_keys: 'Carregar mais chaves',
    key_name: 'Nome da Chave',
    project_home: 'Home do Projeto',
    cluster_faq: 'Selecione qualquer nó no cluster para preencher e outros nós serão identificados automaticamente.',
    redis_status: 'Informaçôes do Redis',
    confirm_flush_db: 'Confirme a exclusão de todas as chaves em db{db}?',
    flushdb: 'Flush DB',
    info_disabled: 'Exceção de execução do comando de informação (pode ter sido desativado), as informações do redis não podem ser exibidas',
    page_zoom: 'Zoom da página',
    scan_disabled: 'Exceção de execução do comando de scan (pode ter sido desativada), a lista de chaves não pode ser exibida',
    key_type_not_support: 'Visual display não é suportado para este tipo. Por favor, use console',
    delete_folder: 'Apagar Pasta',
    multiple_select: 'Múltiplos Seleccionar',
    copy: 'Copiar',
    keys_to_be_deleted: 'Chaves a serem apagadas',
    delete_all: 'Apagar Tudo',
    clear_cache: 'Limpar cache',
    mark_color: 'Cor da marca',
    key_no_permission: 'A permissão de leitura do arquivo expirou, selecione novamente o arquivo de chave manualmente',
    toggle_check_all: 'Selecionar tudo | Desmarcar tudo',
    select_lang: 'Selecione o idioma',
    clear_cache_tip: 'Quando há um problema com o cliente, esta operação irá deletar todas as conexões e configurações para restaurar o cliente',
  },
};

export default pt;
