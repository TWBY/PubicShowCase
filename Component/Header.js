// Header.js
// Web Component：AI 寫程式：打造軟體

class AIHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host {
          position: sticky;
          top: 0;
          z-index: 1000;
          display: block;
        }
        .header-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          font-size: 1.5rem;
          font-weight: bold;
          color: #ffffff;
          letter-spacing: 0.5px;
          text-align: left;
          padding: 18px 0 14px 24px;
          background: var(--primary-blue);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow-light);
        }
        @media (max-width: 600px) {
          .header-flex {
            font-size: 1.1rem;
            padding: 16px 0 12px 16px;
          }
        }
        @media (max-width: 420px) {
          .header-flex {
            font-size: 0.95rem;
            letter-spacing: 0.3px;
            padding-left: 8px;
          }
        }
        .social-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .social-link:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 600px) {
          .social-links {
            gap: 8px;
          }
          .social-link {
            padding: 6px 10px;
            font-size: 12px;
          }
        }
      </style>
      <div class="header-flex">
        <span>AI 寫程式，打造你的數位產品</span>
        <div style="display: flex; align-items: center; gap: 12px;">
          <div class="social-links">
            <a href="https://www.threads.com/@bytech719" target="_blank" rel="noopener noreferrer" class="social-link" title="Threads" aria-label="Threads">
              Threads
            </a>
            <a href="http://go.brickverse.com.tw/OfficeLINEAccount" target="_blank" rel="noopener noreferrer" class="social-link" title="LINE 官方帳號" aria-label="LINE 官方帳號">
              官方 LINE
            </a>
          </div>
          <about-box></about-box>
        </div>
      </div>
    `;
  }
}
customElements.define('ai-header', AIHeader);

export default AIHeader; 