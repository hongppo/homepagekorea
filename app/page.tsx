"use client";

import { useState } from "react";

const dates = [
  { day: "수", date: 22, times: ["오전 11:30", "오후 1:00", "오후 2:30"] },
  { day: "목", date: 23, times: ["오전 10:00", "오후 1:00", "오후 2:30"] },
  { day: "금", date: 24, times: ["오전 10:00", "오전 11:30", "오후 1:00", "오후 2:30"] },
  { day: "월", date: 27, times: ["오후 1:30", "오후 3:00"] },
];

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

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

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

      <section className="schedule-section" aria-labelledby="schedule-title">
        <div className="section-heading centered">
          <p className="eyebrow">PROJECT MEETING</p>
          <h2 id="schedule-title">
            문의하신 내용에 대해 더 자세히 설명드릴 수 있도록
            <br className="desktop-break" /> 편하신 상담 일정을 선택해 주세요.
          </h2>
        </div>

        <div className="booking-shell">
          <div className="booking-meta">
            <div>
              <span className="host-avatar">홈</span>
              <div>
                <p className="host-name">홈페이지코리아</p>
                <strong>프로젝트 상담 미팅</strong>
              </div>
            </div>
            <p className="duration"><span aria-hidden="true">◷</span> 약속 시간 60분</p>
          </div>

          <div className="booking-board">
            <div className="month-panel">
              <div className="month-title">
                <strong>2026년 7월</strong>
                <span>‹ &nbsp;&nbsp; ›</span>
              </div>
              <div className="weekdays" aria-hidden="true">
                {["일", "월", "화", "수", "목", "금", "토"].map((day) => <span key={day}>{day}</span>)}
              </div>
              <div className="month-grid" aria-label="2026년 7월 달력">
                {[28,29,30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,1].map((date, index) => {
                  const available = [24,25,26,29,30,31,32,33].includes(index);
                  return <span className={available ? "available" : index < 3 || index > 33 ? "muted" : ""} key={`${date}-${index}`}>{date}</span>;
                })}
              </div>
            </div>

            <div className="slots-panel">
              <div className="slots-head">
                <span>약속 시간 선택</span>
                <span>(GMT+09:00) 서울</span>
              </div>
              <div className="date-columns">
                {dates.map((item) => (
                  <div className="date-column" key={item.date}>
                    <div className="date-head">
                      <span>{item.day}</span>
                      <strong>{item.date}</strong>
                    </div>
                    <div className="time-list">
                      {item.times.map((time) => {
                        const value = `7월 ${item.date}일 ${time}`;
                        return (
                          <button
                            className={selected === value ? "selected" : ""}
                            type="button"
                            onClick={() => setSelected(value)}
                            key={time}
                            aria-pressed={selected === value}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
              <div className={`selection-bar ${selected ? "visible" : ""}`} aria-live="polite">
                <span>{selected ? `${selected} 선택` : "시간을 선택해 주세요"}</span>
                <button type="button" disabled={!selected}>이 시간으로 예약</button>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="portfolio-section" aria-labelledby="portfolio-title">
        <div className="section-heading">
          <p className="eyebrow">RELATED PROJECTS</p>
          <h2 id="portfolio-title">관련 프로젝트를 확인해 보세요</h2>
          <p>홈페이지코리아가 함께한 대표 프로젝트입니다.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <a className="project-card" href="#project-preview" key={project.title}>
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
