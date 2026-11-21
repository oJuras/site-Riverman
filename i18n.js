// Internationalization (i18n) for Riverman Website
const translations = {
    pt: {
        'nav.features': 'Recursos',
        'nav.download': 'Download',
        'hero.tagline': 'Navegador leve, rápido e experimental',
        'hero.description': 'Baseado em Chromium, desenvolvido para performance.<br>Para quem valoriza velocidade e eficiência.',
        'hero.download': 'Download',
        'hero.features': 'Ver Recursos',
        'features.title': 'Por que escolher o Riverman?',
        'features.fast.title': 'Ultra Rápido',
        'features.fast.desc': 'Inicialização instantânea e navegação fluida. Otimizado para máxima performance.',
        'features.experimental.title': 'Experimental',
        'features.experimental.desc': 'Recursos inovadores em constante desenvolvimento. Sempre à frente.',
        'features.chromium.title': 'Base Chromium',
        'features.chromium.desc': 'Compatível com todas as extensões do Chrome, sem o consumo excessivo de memória.',
        'features.lightweight.title': 'Leve e Limpo',
        'features.lightweight.desc': 'Sem recursos desnecessários. Apenas o essencial para uma navegação eficiente.',
        'download.title': 'Download',
        'download.subtitle': 'Escolha a versão ideal para você',
        'download.installer.title': 'Instalador',
        'download.installer.desc': 'Versão completa com instalação tradicional no sistema',
        'download.portable.desc': 'Execute de qualquer lugar, sem necessidade de instalação',
        'download.installer.button': 'Baixar instalador',
        'download.portable.button': 'Baixar versão portátil',
        'download.linux.title': 'Linux AppImage',
        'download.linux.desc': 'AppImage para Linux x64; não requer instalação.',
        'download.linux.button': 'Baixar AppImage',
        'download.previous': 'Versões anteriores',
        'download.recommended': 'Recomendado',
        'download.requirements': 'Requisitos:',
        'download.minimum': 'mínimo',
        'download.recommended_ram': '8GB recomendado',
        'docs.title': 'Documentação',
        'docs.installer': 'Baixe o instalador para Windows, abra o arquivo .exe e siga as etapas na tela.',
        'docs.portable.title': 'Versão portátil',
        'docs.portable': 'Baixe o arquivo .exe portátil e abra-o diretamente, sem instalar o navegador.',
        'docs.linux.title': 'Linux (AppImage)',
        'docs.linux': 'Baixe o AppImage para Linux x64. No terminal, na pasta do arquivo, execute <code>chmod +x Riverman-1.0.1.AppImage</code> e depois <code>./Riverman-1.0.1.AppImage</code>.',
        'docs.download': 'Ver downloads e requisitos',
        'docs.tools.title': 'Ferramentas na 1.0.1',
        'docs.tools': 'Ao abrir uma ferramenta novamente, o Riverman seleciona a aba interna que já está aberta. Na aba Downloads, escolha um download para acompanhar seu progresso ou pausá-lo, retomá-lo ou cancelá-lo.',
        'docs.unsigned': 'Os executáveis Windows x64 da versão 1.0.1 não são assinados. O Microsoft Defender SmartScreen pode exibir um aviso.',
        'changelog.title': 'Histórico de versões',
        'changelog.tabs': 'Configurações, Downloads, Extensões, Notepad, Reader, Pinboard, Timeline, Logs, senhas salvas e minijogos abrem em abas internas em vez de sobreposições.',
        'changelog.source': 'Reader e Pinboard continuam vinculados à página de origem ao alternar entre abas de ferramentas.',
        'changelog.downloads': 'A aba Downloads mostra o progresso em tempo real e permite pausar, retomar ou cancelar cada download individualmente.',
        'about.title': 'Sobre o Projeto',
        'about.description': 'Riverman foi criado para oferecer uma alternativa leve aos navegadores tradicionais. É experimental e focado em performance.'
    },
    en: {
        'nav.features': 'Features',
        'nav.download': 'Download',
        'hero.tagline': 'Lightweight, fast and experimental browser',
        'hero.description': 'Chromium-based, built for performance.<br>For those who value speed and efficiency.',
        'hero.download': 'Download',
        'hero.features': 'View Features',
        'features.title': 'Why choose Riverman?',
        'features.fast.title': 'Ultra Fast',
        'features.fast.desc': 'Instant startup and smooth browsing. Optimized for maximum performance.',
        'features.experimental.title': 'Experimental',
        'features.experimental.desc': 'Innovative features in constant development. Always ahead.',
        'features.chromium.title': 'Chromium Base',
        'features.chromium.desc': 'Compatible with all Chrome extensions, without excessive memory consumption.',
        'features.lightweight.title': 'Light and Clean',
        'features.lightweight.desc': 'No unnecessary features. Just the essentials for efficient browsing.',
        'download.title': 'Download',
        'download.subtitle': 'Choose the ideal version for you',
        'download.installer.title': 'Installer',
        'download.installer.desc': 'Full version with traditional system installation',
        'download.portable.desc': 'Run from anywhere, no installation required',
        'download.installer.button': 'Download installer',
        'download.portable.button': 'Download portable version',
        'download.linux.title': 'Linux AppImage',
        'download.linux.desc': 'AppImage for Linux x64; no installation required.',
        'download.linux.button': 'Download AppImage',
        'download.previous': 'Previous versions',
        'download.recommended': 'Recommended',
        'download.requirements': 'Requirements:',
        'download.minimum': 'minimum',
        'download.recommended_ram': '8GB recommended',
        'docs.title': 'Documentation',
        'docs.installer': 'Download the Windows installer, open the .exe file, and follow the on-screen steps.',
        'docs.portable.title': 'Portable version',
        'docs.portable': 'Download the portable .exe file and open it directly without installing the browser.',
        'docs.linux.title': 'Linux (AppImage)',
        'docs.linux': 'Download the AppImage for Linux x64. In a terminal opened in the file folder, run <code>chmod +x Riverman-1.0.1.AppImage</code>, then <code>./Riverman-1.0.1.AppImage</code>.',
        'docs.download': 'View downloads and requirements',
        'docs.tools.title': 'Tools in 1.0.1',
        'docs.tools': 'Reopening a tool selects its existing browser tab. In the Downloads tab, select a download to check its progress or to pause, resume, or cancel it.',
        'docs.unsigned': 'The 1.0.1 Windows x64 executables are unsigned. Microsoft Defender SmartScreen may show a warning.',
        'changelog.title': 'Changelog',
        'changelog.tabs': 'Settings, Downloads, Extensions, Notepad, Reader, Pinboard, Timeline, Logs, saved passwords, and Minigames open in browser tabs rather than overlays.',
        'changelog.source': 'Reader and Pinboard stay linked to the source page when switching between tool tabs.',
        'changelog.downloads': 'The Downloads tab shows live progress and lets you pause, resume, or cancel each download individually.',
        'about.title': 'About the Project',
        'about.description': 'Riverman was created to offer a lightweight alternative to traditional browsers. It is experimental and focused on performance.'
    },
    es: {
        'nav.features': 'Características',
        'nav.download': 'Descargar',
        'hero.tagline': 'Navegador ligero, rápido y experimental',
        'hero.description': 'Basado en Chromium, desarrollado para rendimiento.<br>Para quienes valoran velocidad y eficiencia.',
        'hero.download': 'Descargar',
        'hero.features': 'Ver Características',
        'features.title': '¿Por qué elegir Riverman?',
        'features.fast.title': 'Ultra Rápido',
        'features.fast.desc': 'Inicio instantáneo y navegación fluida. Optimizado para máximo rendimiento.',
        'features.experimental.title': 'Experimental',
        'features.experimental.desc': 'Características innovadoras en constante desarrollo. Siempre adelante.',
        'features.chromium.title': 'Base Chromium',
        'features.chromium.desc': 'Compatible con todas las extensiones de Chrome, sin consumo excesivo de memoria.',
        'features.lightweight.title': 'Ligero y Limpio',
        'features.lightweight.desc': 'Sin características innecesarias. Solo lo esencial para una navegación eficiente.',
        'download.title': 'Descargar',
        'download.subtitle': 'Elige la versión ideal para ti',
        'download.installer.title': 'Instalador',
        'download.installer.desc': 'Versión completa con instalación tradicional en el sistema',
        'download.portable.desc': 'Ejecuta desde cualquier lugar, sin necesidad de instalación',
        'download.installer.button': 'Descargar instalador',
        'download.portable.button': 'Descargar versión portátil',
        'download.linux.title': 'Linux AppImage',
        'download.linux.desc': 'AppImage para Linux x64; no requiere instalación.',
        'download.linux.button': 'Descargar AppImage',
        'download.previous': 'Versiones anteriores',
        'download.recommended': 'Recomendado',
        'download.requirements': 'Requisitos:',
        'download.minimum': 'mínimo',
        'download.recommended_ram': '8GB recomendado',
        'docs.title': 'Documentación',
        'docs.installer': 'Descarga el instalador para Windows, abre el archivo .exe y sigue los pasos en pantalla.',
        'docs.portable.title': 'Versión portátil',
        'docs.portable': 'Descarga el archivo .exe portátil y ábrelo directamente sin instalar el navegador.',
        'docs.linux.title': 'Linux (AppImage)',
        'docs.linux': 'Descarga el AppImage para Linux x64. En una terminal abierta en la carpeta del archivo, ejecuta <code>chmod +x Riverman-1.0.1.AppImage</code> y luego <code>./Riverman-1.0.1.AppImage</code>.',
        'docs.download': 'Ver descargas y requisitos',
        'docs.tools.title': 'Herramientas en la versión 1.0.1',
        'docs.tools': 'Al volver a abrir una herramienta, Riverman selecciona la pestaña que ya está abierta. En la pestaña Descargas, selecciona una descarga para ver su progreso, pausarla, reanudarla o cancelarla.',
        'docs.unsigned': 'Los ejecutables de la versión 1.0.1 para Windows x64 no están firmados. Microsoft Defender SmartScreen puede mostrar una advertencia.',
        'changelog.title': 'Historial de versiones',
        'changelog.tabs': 'Configuración, Descargas, Extensiones, Notepad, Reader, Pinboard, Timeline, registros, contraseñas guardadas y minijuegos se abren en pestañas en lugar de paneles superpuestos.',
        'changelog.source': 'Reader y Pinboard siguen vinculados a la página de origen al cambiar entre pestañas de herramientas.',
        'changelog.downloads': 'La pestaña Descargas muestra el progreso en tiempo real y permite pausar, reanudar o cancelar cada descarga por separado.',
        'about.title': 'Sobre el Proyecto',
        'about.description': 'Riverman fue creado para ofrecer una alternativa ligera a los navegadores tradicionales. Es experimental y enfocado en rendimiento.'
    },
    zh: {
        'nav.features': '功能',
        'nav.download': '下载',
        'hero.tagline': '轻量级、快速、实验性浏览器',
        'hero.description': '基于Chromium，专为性能而设计。<br>为追求速度和效率的用户打造。',
        'hero.download': '下载',
        'hero.features': '查看功能',
        'features.title': '为什么选择Riverman？',
        'features.fast.title': '超快速度',
        'features.fast.desc': '即时启动，流畅浏览。优化以实现最佳性能。',
        'features.experimental.title': '实验性',
        'features.experimental.desc': '不断开发的创新功能。始终领先。',
        'features.chromium.title': 'Chromium内核',
        'features.chromium.desc': '兼容所有Chrome扩展，不会过度消耗内存。',
        'features.lightweight.title': '轻量简洁',
        'features.lightweight.desc': '没有不必要的功能。只保留高效浏览的必需品。',
        'download.title': '下载',
        'download.subtitle': '选择适合您的版本',
        'download.installer.title': '安装程序',
        'download.installer.desc': '完整版本，传统系统安装',
        'download.portable.desc': '随处运行，无需安装',
        'download.installer.button': '下载安装程序',
        'download.portable.button': '下载便携版',
        'download.linux.title': 'Linux AppImage',
        'download.linux.desc': '适用于 Linux x64 的 AppImage，无需安装。',
        'download.linux.button': '下载 AppImage',
        'download.previous': '历史版本',
        'download.recommended': '推荐',
        'download.requirements': '系统要求：',
        'download.minimum': '最低',
        'download.recommended_ram': '推荐8GB',
        'docs.title': '文档',
        'docs.installer': '下载 Windows 安装程序，打开 .exe 文件，然后按照屏幕上的提示操作。',
        'docs.portable.title': '便携版',
        'docs.portable': '下载便携版 .exe 文件后直接打开，无需安装浏览器。',
        'docs.linux.title': 'Linux（AppImage）',
        'docs.linux': '下载适用于 Linux x64 的 AppImage。在文件所在目录打开终端，运行 <code>chmod +x Riverman-1.0.1.AppImage</code>，然后运行 <code>./Riverman-1.0.1.AppImage</code>。',
        'docs.download': '查看下载与系统要求',
        'docs.tools.title': '1.0.1 版工具',
        'docs.tools': '再次打开工具时，Riverman 会切换到该工具已打开的标签页。在“下载”标签页中，选择一项下载即可查看进度，或暂停、继续、取消该下载。',
        'docs.unsigned': '1.0.1 版的 Windows x64 可执行文件未签名。Microsoft Defender SmartScreen 可能会显示警告。',
        'changelog.title': '更新日志',
        'changelog.tabs': '设置、下载、扩展程序、Notepad、Reader、Pinboard、Timeline、日志、已保存的密码和小游戏现在在浏览器标签页中打开，不再以浮层显示。',
        'changelog.source': '在工具标签页之间切换时，Reader 和 Pinboard 仍与来源页面关联。',
        'changelog.downloads': '“下载”标签页实时显示进度，并支持单独暂停、继续或取消每项下载。',
        'about.title': '关于项目',
        'about.description': 'Riverman的创建是为了提供传统浏览器的轻量级替代品。它是实验性的，专注于性能。'
    }
};

let currentLang = 'pt';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('riverman-lang', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;
    
    // Update all elements with data-i18n attribute
    // Note: Using innerHTML because some translations contain safe HTML tags (<a>, <br>)
    // All translations are hardcoded in this file, so XSS risk is minimal
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update active state on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language selector
document.addEventListener('DOMContentLoaded', () => {
    // Get saved language or detect from browser
    const savedLang = localStorage.getItem('riverman-lang');
    const browserLang = navigator.language.slice(0, 2);
    const supportedLangs = ['pt', 'en', 'es', 'zh'];
    
    let initialLang = 'pt';
    if (savedLang && supportedLangs.includes(savedLang)) {
        initialLang = savedLang;
    } else if (supportedLangs.includes(browserLang)) {
        initialLang = browserLang;
    }
    
    setLanguage(initialLang);
    
    // Add click handlers to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
