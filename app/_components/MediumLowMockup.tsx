const projects = [
  {
    category: "학회/협회",
    title: "대한기능의학회 홈페이지 리뉴얼 및 통합 운영 시스템 구축",
    mark: "KFIM",
    tone: "slate",
  },
  {
    category: "공공기관",
    title: "한양대학교 연구장비활용네트워크(HY-RUN)",
    mark: "HY-RUN",
    tone: "blue",
  },
  {
    category: "중견/대기업",
    title: "오므론 웹사이트 리뉴얼",
    mark: "OMRON",
    tone: "cyan",
  },
];

const process = [
  {
    number: "01",
    title: "요구사항 확인",
    description: "비즈니스 목표와 필요한 기능을 확인합니다.",
  },
  {
    number: "02",
    title: "기획 및 범위 정의",
    description: "프로젝트의 구조와 구현 범위를 구체화합니다.",
  },
  {
    number: "03",
    title: "디자인·개발",
    description: "목표에 맞는 화면과 기능을 설계하고 구현합니다.",
  },
  {
    number: "04",
    title: "검수 및 오픈",
    description: "품질 검수와 최종 확인을 거쳐 서비스를 오픈합니다.",
  },
];

export default function MediumLowMockup() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="홈페이지코리아">
          <span className="logo-placeholder">로고 영역</span>
        </a>
      </header>

      <section className="completion" id="top">
        <div className="status-icon" aria-hidden="true">
          <span>✓</span>
        </div>
        <h1>감사합니다.</h1>
        <p className="completion-subtitle">문의가 정상적으로 접수되었습니다.</p>
      </section>

      <section className="reference-section" aria-labelledby="reference-title">
        <div className="section-heading centered reference-heading">
          <p className="eyebrow">RELATED PROJECTS</p>
          <h2 id="reference-title">
            문의하신 내용을 확인한 후
            <br className="desktop-break" /> 신속하게 답변드리겠습니다.
          </h2>
          <p>
            기다리시는 동안 참고하실 수 있도록,
            <br className="desktop-break" /> 문의하신 프로젝트와 관련된 홈페이지코리아의 대표 사례를 소개합니다.
          </p>
        </div>

        <div className="project-grid" id="portfolio-title">
          {projects.map((project) => (
            <a
              className="project-card"
              href="https://homepagekorea.com/portfolio/"
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <div className={`project-visual ${project.tone}`}>
                <span>{project.mark}</span>
                <i aria-hidden="true" />
              </div>
              <div className="project-content">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="process-inner">
          <div className="section-heading centered">
            <p className="eyebrow">OUR PROCESS</p>
            <h2 id="process-title">프로젝트는 이렇게 진행됩니다</h2>
            <p>기획부터 오픈까지, 각 단계에 필요한 과정을 체계적으로 진행합니다.</p>
          </div>

          <ol className="process-grid">
            {process.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="strength-section" aria-labelledby="strength-title">
        <div className="section-heading centered compact-heading">
          <p className="eyebrow">HOMEPAGEKOREA</p>
          <h2 id="strength-title">검증된 경험으로 함께합니다</h2>
        </div>

        <div className="strength-grid">
          <div>
            <strong>27년</strong>
            <p>웹 에이전시 운영 경험</p>
          </div>
          <div>
            <strong>1,100+</strong>
            <p>기업·기관 프로젝트 수행</p>
          </div>
          <div>
            <strong>ALL-IN-ONE</strong>
            <p>기획부터 개발·운영까지</p>
          </div>
        </div>

        <div className="single-cta">
          <a href="https://homepagekorea.com/portfolio/" target="_blank" rel="noreferrer">
            전체 포트폴리오 보기 <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div>
            <span className="footer-brand">로고 영역</span>
            <p>대한민국 기업 성장을 함께한 27년 경력 웹 에이전시</p>
          </div>
          <a href="#top">홈페이지로 돌아가기 <span aria-hidden="true">→</span></a>
        </div>
      </footer>
    </main>
  );
}
