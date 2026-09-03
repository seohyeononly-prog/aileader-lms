// Replace this object with Supabase/API data when the dashboard is connected.
const mockDashboardData = {
  learner: {
    name: '박서현',
    cohort: 'AI리더 7기',
    initials: '서',
    part: 'PART 3. 서비스 기획의 기초 · 3일차',
    greeting: 'DAY 08 | 오늘도 한 걸음씩 가볼까요?',
  },
  schedule: [
    { time: '10:00', title: 'Part 3 라이브 세션' },
    { time: '14:00', title: '팀 프로젝트 스프린트 체크인' },
    { time: '17:30', title: '오늘의 회고 작성' },
  ],
  notices: [
    { id: 1, date: '2026.09.03', title: '운영 만족도 조사 제출', content: '더 나은 교육 운영을 위한 만족도 조사가 진행 중입니다. 오늘 수업 종료 전까지 제출해 주세요.', confirmed: false, action: { type: 'survey', targetId: 'weekly-survey' } },
    { id: 2, date: '2026.09.03', title: '9월 13일 게임 이벤트 진행', content: '수강생 참여 게임 이벤트가 9월 13일에 진행됩니다. 팀별 안내를 확인해 주세요.', confirmed: false, action: { type: 'notice' } },
    { id: 3, date: '2026.09.03', title: '멘토링 준비서 제출 안내', content: '다음 주 멘토링 전까지 준비서를 작성해 제출해 주세요. 제출 링크는 멘토링 메뉴에서 확인할 수 있습니다.', confirmed: false, action: { type: 'notice' } },
  ],
  pastNotices: [
    { date: '2026.08.24', title: 'AI리더 7기 개강 안내', content: '개강 첫 주 수업 일정과 학습 환경 안내를 공유합니다.' },
    { date: '2026.08.26', title: '학습 플랫폼 이용 가이드', content: '출결, 과제, 수업 자료 확인 방법을 안내합니다.' },
    { date: '2026.08.28', title: '팀 프로젝트 팀 편성 안내', content: '프로젝트 팀 편성과 첫 팀 미팅 일정을 안내합니다.' },
    { date: '2026.08.31', title: '1주차 회고 작성 안내', content: '한 주 동안의 학습을 회고하고 다음 목표를 정리해 주세요.' },
    { date: '2026.09.02', title: 'Part 3 수업 자료 사전 안내', content: '서비스 기획의 기초 수업 전 확인할 자료를 공유합니다.' },
  ],
  todo: {
    date: '2026. 09. 03',
    items: [
      { id: 1, text: '팀 회의록 정리', completed: false, tag: '자동 생성' },
      { id: 2, text: '과제 제출', completed: false, tag: '자동 생성' },
      { id: 3, text: '팀명 규칙 체크', completed: false },
    ],
  },
  assignment: {
    total: 81,
    parts: [
      { name: 'Part 1', blocks: ['complete', 'complete'], label: '100%' },
      { name: 'Part 2', blocks: ['complete', 'incomplete', 'upcoming'], label: '66.7%' },
      { name: 'Part 3', blocks: ['complete', 'complete', 'complete', 'future'], label: '75%' },
      { name: 'Part 4', blocks: ['future', 'future', 'future'], label: '-' },
    ],
  },
  attendance: {
    rate: 94,
    periods: [
      { label: '1단위기간', rate: 100 },
      { label: '2단위기간', rate: 67 },
      { label: '3단위기간', rate: 60 },
      { label: '4단위기간', rate: null },
    ],
  },
  campCalendar: {
    monthLabel: '2026년 9월',
    weekdayLabels: ['일', '월', '화', '수', '목', '금', '토'],
    days: [
      { date: '2026-08-30', number: 30, outside: true }, { date: '2026-08-31', number: 31, outside: true }, { date: '2026-09-01', number: 1 }, { date: '2026-09-02', number: 2 }, { date: '2026-09-03', number: 3, today: true }, { date: '2026-09-04', number: 4 }, { date: '2026-09-05', number: 5 },
      { date: '2026-09-06', number: 6 }, { date: '2026-09-07', number: 7 }, { date: '2026-09-08', number: 8 }, { date: '2026-09-09', number: 9 }, { date: '2026-09-10', number: 10 }, { date: '2026-09-11', number: 11 }, { date: '2026-09-12', number: 12 },
      { date: '2026-09-13', number: 13 }, { date: '2026-09-14', number: 14 }, { date: '2026-09-15', number: 15 }, { date: '2026-09-16', number: 16 }, { date: '2026-09-17', number: 17 }, { date: '2026-09-18', number: 18 }, { date: '2026-09-19', number: 19 },
      { date: '2026-09-20', number: 20 }, { date: '2026-09-21', number: 21 }, { date: '2026-09-22', number: 22 }, { date: '2026-09-23', number: 23 }, { date: '2026-09-24', number: 24 }, { date: '2026-09-25', number: 25 }, { date: '2026-09-26', number: 26 },
      { date: '2026-09-27', number: 27 }, { date: '2026-09-28', number: 28 }, { date: '2026-09-29', number: 29 }, { date: '2026-09-30', number: 30 }, { date: '2026-10-01', number: 1, outside: true }, { date: '2026-10-02', number: 2, outside: true }, { date: '2026-10-03', number: 3, outside: true },
      { date: '2026-10-04', number: 4, outside: true }, { date: '2026-10-05', number: 5, outside: true }, { date: '2026-10-06', number: 6, outside: true }, { date: '2026-10-07', number: 7, outside: true }, { date: '2026-10-08', number: 8, outside: true }, { date: '2026-10-09', number: 9, outside: true }, { date: '2026-10-10', number: 10, outside: true },
    ],
    events: [
      { id: 'orientation', date: '2026-09-01', title: 'Part 3 수업 시작', type: 'event' },
      { id: 'weekly-survey', date: '2026-09-03', title: '3주차 운영 설문', type: 'survey', surveyId: 'weekly-survey' },
      { id: 'project-checkin', date: '2026-09-05', title: '팀 프로젝트 체크인', type: 'event' },
      { id: 'mentor-survey', date: '2026-09-08', title: '멘토링 만족도 설문', type: 'survey', surveyId: 'mentor-survey' },
      { id: 'review', date: '2026-09-11', title: '주간 회고 제출', type: 'event' },
    ],
    surveys: [
      { id: 'weekly-survey', title: '3주차 운영 설문', date: '2026. 09. 03', due: '오늘 23:59까지', status: 'pending', typeformUrl: 'https://form.typeform.com/to/U8xaFJef', description: 'AI리더 7기 운영 만족도 설문입니다.' },
      { id: 'daily-review', title: 'DAY 08 학습 회고', date: '2026. 09. 03', due: '오늘 18:00까지', status: 'pending', typeformUrl: 'https://form.typeform.com/to/U8xaFJef', description: '오늘 학습한 내용을 간단히 회고해 주세요.' },
      { id: 'attendance-check', title: '9월 3일 출석 확인', date: '2026. 09. 03', due: '제출 완료', status: 'complete', typeformUrl: 'https://form.typeform.com/to/U8xaFJef', description: '오늘 출석 확인 설문입니다.' },
      { id: 'mentor-survey', title: '멘토링 만족도 설문', date: '2026. 09. 08', due: '9월 8일 23:59까지', status: 'upcoming', typeformUrl: 'https://form.typeform.com/to/U8xaFJef', description: '멘토링 세션 후 만족도를 남겨 주세요.' },
    ],
  },
}

const menuItems = ['홈', '캠프 캘린더 & 설문', '학습', '프로젝트', '멘토링', '배치', 'FAQ']
const menuSymbols = ['⌂', '▦', '✓', '▱', '○', '▤', '?']
let todoItems = [...mockDashboardData.todo.items]
let noticeItems = [...mockDashboardData.notices]
let isAddingTodo = false
let editingTodoId = null
let lastFocusedElement = null
let chatMessages = [{ role: 'assistant', text: '안녕하세요. AI리더 운영 블로그의 안내를 바탕으로 궁금한 점을 도와드릴게요.' }]

function Card({ title, action, className = '', content }) {
  return `
    <section class="card ${className}" aria-labelledby="${title.replace(/\s/g, '-')}">
      <div class="card-heading">
        <h2 id="${title.replace(/\s/g, '-')}">${title}</h2>
        ${action || ''}
      </div>
      ${content}
    </section>
  `
}

function Chatbot() {
  return `
    <aside class="chatbot" data-chatbot aria-label="AI리더 챗봇">
      <section class="chatbot-panel" data-chat-panel hidden aria-label="AI리더 챗봇 대화창">
        <header><div><p>AI리더 안내 도우미</p><h2>무엇이 궁금한가요?</h2></div><button type="button" data-chat-close aria-label="챗봇 닫기">×</button></header>
        <p class="chatbot-source">AI리더 운영 블로그 기반 안내</p>
        <ul class="chat-messages" data-chat-messages aria-live="polite"></ul>
        <div class="chat-suggestions"><button type="button" data-chat-question="출결은 어떻게 처리하나요?">출결 안내</button><button type="button" data-chat-question="과제 제출 방법을 알려주세요.">과제 제출</button><button type="button" data-chat-question="멘토링 일정이 궁금해요.">멘토링 일정</button></div>
        <form class="chat-input" data-chat-form><label class="sr-only" for="chat-message">챗봇에게 질문하기</label><input id="chat-message" type="text" autocomplete="off" placeholder="궁금한 내용을 입력해 주세요" /><button type="submit">보내기</button></form>
      </section>
      <button class="chatbot-toggle" type="button" data-chat-toggle aria-expanded="false"><span aria-hidden="true">◌</span><span>챗봇에게 물어보기</span></button>
    </aside>
  `
}

function ScheduleCard(schedule) {
  return `
    <section class="card schedule-card top-card" aria-labelledby="today-schedule-title">
      <div class="schedule-layout">
        <div class="schedule-main">
          <div class="card-heading"><h2 id="today-schedule-title">오늘의 일정</h2></div>
          <div class="schedule-content"><div class="schedule-list"><ul>${schedule.map((event) => `<li><time>${event.time}</time><span>${event.title}</span></li>`).join('')}</ul></div></div>
        </div>
        <div class="schedule-side">${QrGuide()}</div>
      </div>
    </section>
  `
}

function Sidebar(learner) {
  return `
    <aside class="sidebar">
      <a class="brand" href="#home" aria-label="AI리더 대시보드 홈">
        <span class="brand-mark">OZ</span><span>AI리더 대시보드</span>
      </a>
      <nav aria-label="주요 메뉴">
        <ul class="menu-list">
          ${menuItems.map((item, index) => `
            <li><button class="menu-item ${item === '홈' ? 'is-active' : ''}" type="button" data-dashboard-view="${item === '홈' ? 'home' : item === '캠프 캘린더 & 설문' ? 'calendar' : item === 'FAQ' ? 'faq' : ''}" aria-current="${item === '홈' ? 'page' : 'false'}">
              <span aria-hidden="true">${menuSymbols[index]}</span>${item}
            </button></li>
          `).join('')}
        </ul>
      </nav>
      <div class="sidebar-footer">
        <button class="admin-demo-button" type="button" data-admin-demo aria-pressed="false"><span aria-hidden="true">▣</span>운영진 화면 보기</button>
        <div class="profile sidebar-profile"><span class="avatar">${learner.initials}</span><div><strong>${learner.name}</strong><span>${learner.cohort}</span></div></div>
      </div>
    </aside>
  `
}

function ProgressBar({ value, label }) {
  const safeValue = value ?? 0
  return `
    <div class="progress-row">
      <strong>${label}</strong>
      <div class="progress-track" role="progressbar" aria-label="${label} 출석률" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${safeValue}">
        <span class="progress-fill" style="width: ${safeValue}%"></span>
      </div>
      <span class="progress-value">${value === null ? '-' : `${value}%`}</span>
    </div>
  `
}

function QrGuide() {
  return `
    <button class="qr-guide" type="button" data-qr-toggle aria-label="안내 QR 크게 보기" aria-haspopup="dialog">
      <img class="qr-image" src="./public/AL02_11.21_QR.png" alt="출결 처리 QR 코드" />
      <strong>09.04 — 09.11</strong>
    </button>
  `
}

function TodoEditor({ id, value, isNew = false }) {
  return `
    <li class="todo-editor" data-todo-editor>
      <label class="sr-only" for="todo-input-${id}">${isNew ? '새 To Do 항목' : 'To Do 항목 수정'}</label>
      <input id="todo-input-${id}" type="text" value="${value}" data-todo-input autocomplete="off" placeholder="할 일을 입력해 주세요" />
      <div class="todo-editor-actions">
        <button class="add-button" type="button" data-todo-action="save" data-todo-id="${id}">저장</button>
        <button class="quiet-button" type="button" data-todo-action="cancel">취소</button>
      </div>
    </li>
  `
}

function renderTodoItems() {
  const list = document.querySelector('[data-todo-list]')
  if (!list) return
  list.innerHTML = todoItems.map((item) => editingTodoId === item.id ? TodoEditor({ id: item.id, value: item.text }) : `
    <li class="todo-item ${item.completed ? 'is-complete' : ''}">
      <label>
        <input type="checkbox" data-todo-id="${item.id}" ${item.completed ? 'checked' : ''} />
        <span class="custom-check" aria-hidden="true"></span>
        <span>${item.text}</span>
        ${item.tag ? `<em>${item.tag}</em>` : ''}
      </label>
      ${item.tag ? '' : `<div class="todo-item-actions"><button type="button" data-todo-action="edit" data-todo-id="${item.id}">수정</button><button type="button" data-todo-action="delete" data-todo-id="${item.id}">삭제</button></div>`}
    </li>
  `).join('') + (isAddingTodo ? TodoEditor({ id: 'new', value: '', isNew: true }) : '')

  const completedCount = todoItems.filter((item) => item.completed).length
  const summary = document.querySelector('[data-todo-summary]')
  const progress = document.querySelector('[data-todo-progress]')
  if (summary) summary.textContent = `오늘 할 일 ${todoItems.length}개 중 ${completedCount}개 완료`
  if (progress) progress.style.width = `${todoItems.length ? (completedCount / todoItems.length) * 100 : 0}%`

  const editorInput = list.querySelector('[data-todo-input]')
  if (editorInput) editorInput.focus()
}

function renderNotices() {
  const list = document.querySelector('[data-notice-list]')
  if (!list) return
  list.innerHTML = noticeItems.map((notice) => `
    <li>
      ${notice.action?.type === 'survey'
        ? `<button class="notice-box notice-toggle ${notice.confirmed ? 'is-checked' : ''}" type="button" data-toggle-survey-notice="${notice.id}" role="checkbox" aria-checked="${notice.confirmed}" aria-label="${notice.title} ${notice.confirmed ? '제출 완료' : '제출 미완료'}"></button>`
        : `<button class="notice-box notice-box-button ${notice.confirmed ? 'is-checked' : ''}" type="button" data-notice-id="${notice.id}" aria-label="${notice.title} 상세 내용 보기"></button>`}
      <button type="button" data-notice-id="${notice.id}"><span>${notice.title}</span><small>${notice.confirmed ? notice.action?.type === 'survey' ? '제출 완료' : '확인 완료' : notice.action?.type === 'survey' ? '설문 작성' : '내용 보기'}</small></button>
    </li>
  `).join('')
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[character]))
}

function getChatbotReply(question) {
  const normalizedQuestion = question.replace(/\s/g, '')
  if (normalizedQuestion.includes('출결')) return '출결은 수업 시작 전 안내된 QR을 스캔해 처리할 수 있어요. 홈 화면의 오늘의 일정에서 출결 QR을 확인해 주세요.'
  if (normalizedQuestion.includes('과제')) return '과제는 학습 메뉴와 과제 진도율 카드에서 확인할 수 있어요. 제출 기한과 안내 문구를 먼저 확인해 주세요.'
  if (normalizedQuestion.includes('멘토링')) return '멘토링 일정과 준비서는 멘토링 메뉴의 공지를 확인해 주세요. 다음 세션 전 준비서 제출 여부도 함께 점검해 주세요.'
  return '관련 안내는 AI리더 운영 블로그에서 확인할 수 있어요. 자세한 내용은 FAQ 메뉴의 블로그를 참고해 주세요.'
}

function renderChatMessages() {
  const list = document.querySelector('[data-chat-messages]')
  if (!list) return
  list.innerHTML = chatMessages.map((message) => `<li class="${message.role}">${escapeHtml(message.text)}</li>`).join('')
  list.scrollTop = list.scrollHeight
}

function sendChatMessage(question) {
  const text = question.trim()
  if (!text) return
  chatMessages = [...chatMessages, { role: 'user', text }, { role: 'assistant', text: getChatbotReply(text) }]
  renderChatMessages()
}

function openModal(content, { wide = false, className = '' } = {}) {
  const modal = document.querySelector('[data-modal]')
  lastFocusedElement = document.activeElement
  modal.classList.toggle('is-wide', wide)
  modal.innerHTML = `<div class="modal-backdrop" data-close-modal></div><section class="modal-dialog ${className}" role="dialog" aria-modal="true" aria-labelledby="modal-title">${content}</section>`
  modal.hidden = false
  modal.querySelector('[data-modal-close], [data-confirm-notice]')?.focus()
}

function closeModal() {
  const modal = document.querySelector('[data-modal]')
  modal.hidden = true
  modal.classList.remove('is-wide')
  modal.innerHTML = ''
  lastFocusedElement?.focus()
}

function showNotice(noticeId) {
  const notice = noticeItems.find((item) => item.id === noticeId)
  if (!notice) return
  openModal(`
    <header class="modal-header"><div><p>${notice.date}</p><h2 id="modal-title">${notice.title}</h2></div><button class="modal-close" type="button" data-modal-close aria-label="공지 모달 닫기">×</button></header>
    <p class="modal-content">${notice.content}</p>
    <div class="modal-actions"><button class="quiet-button" type="button" data-modal-close>닫기</button><button class="add-button" type="button" data-confirm-notice="${notice.id}" ${notice.confirmed ? 'disabled' : ''}>${notice.confirmed ? '확인 완료' : '공지 확인 완료'}</button></div>
  `)
}

function showPastNotices() {
  const notices = mockDashboardData.pastNotices.map((notice) => `<li><time>${notice.date}</time><div><strong>${notice.title}</strong><p>${notice.content}</p></div></li>`).join('')
  openModal(`
    <header class="modal-header"><div><p>개강일 ~ 2026.09.02</p><h2 id="modal-title">지난 공지</h2></div><button class="modal-close" type="button" data-modal-close aria-label="지난 공지 모달 닫기">×</button></header>
    <ul class="past-notice-list">${notices}</ul>
    <div class="modal-actions"><button class="quiet-button" type="button" data-modal-close>닫기</button></div>
  `)
}

function showQrModal() {
  const qrSource = document.querySelector('.qr-image')?.getAttribute('src') ?? './public/AL02_11.21_QR.png'
  openModal(`
    <header class="modal-header"><div><p>09.04 — 09.11</p><h2 id="modal-title">출결 QR</h2></div><button class="modal-close" type="button" data-modal-close aria-label="QR 모달 닫기">×</button></header>
    <div class="qr-modal-content"><div class="qr-modal-code"><img src="${qrSource}" alt="출결 처리 QR 코드" /></div><p>QR코드를 스캔하여 출결 처리를 진행하세요.</p></div>
    <div class="modal-actions"><button class="quiet-button" type="button" data-modal-close>닫기</button></div>
  `)
}

function showSurveyModal(surveyId) {
  const survey = mockDashboardData.campCalendar.surveys.find((item) => item.id === surveyId)
  if (!survey) return
  openModal(`
    <header class="modal-header survey-modal-header"><div><p>SURVEY · ${survey.date}</p><h2 id="modal-title">${survey.title}</h2><span>${survey.description}</span></div><div class="survey-due"><small>제출 마감</small><strong>${survey.due}</strong></div><button class="modal-close" type="button" data-modal-close aria-label="설문 모달 닫기">×</button></header>
    <div class="typeform-frame"><iframe src="${survey.typeformUrl}" title="${survey.title} Typeform" loading="lazy" allow="camera; microphone"></iframe></div>
  `, { wide: true, className: 'survey-dialog' })
}

function openNoticeAction(noticeId) {
  const notice = noticeItems.find((item) => item.id === noticeId)
  if (!notice) return
  if (notice.action?.type === 'survey') {
    showSurveyModal(notice.action.targetId)
    return
  }
  showNotice(noticeId)
}

function CampCalendarView() {
  const calendar = mockDashboardData.campCalendar
  const eventsByDate = calendar.events.reduce((result, event) => ({ ...result, [event.date]: [...(result[event.date] ?? []), event] }), {})
  const todaySurveys = calendar.surveys.filter((survey) => survey.date === '2026. 09. 03')
  const SurveyList = (status, title) => {
    const surveys = todaySurveys.filter((survey) => survey.status === status)
    return `<section class="survey-status-group"><h3>${title}<span>${surveys.length}</span></h3>${surveys.length ? `<ul>${surveys.map((survey) => `<li><button type="button" data-survey-id="${survey.id}"><span class="survey-status-dot ${survey.status}" aria-hidden="true"></span><span><strong>${survey.title}</strong><small>${survey.due}</small></span><b>${survey.status === 'complete' ? '완료' : '작성하기'}</b></button></li>`).join('')}</ul>` : '<p class="empty-surveys">해당 설문이 없습니다.</p>'}</section>`
  }
  return `
    <section class="calendar-view" data-calendar-view hidden aria-labelledby="calendar-title">
      <header class="page-header calendar-page-header"><div><p>AI리더 캠프</p><h1 id="calendar-title">캠프 캘린더 & 설문</h1></div></header>
      <div class="calendar-page-grid">
        <section class="calendar-card">
          <header class="calendar-card-header"><div class="calendar-month-controls"><button type="button" aria-label="이전 달">‹</button><h2>${calendar.monthLabel}</h2><button type="button" aria-label="다음 달">›</button></div><div class="calendar-legend"><span><i class="survey" aria-hidden="true"></i>설문</span><span><i class="event" aria-hidden="true"></i>일정</span></div></header>
          <div class="calendar-weekdays">${calendar.weekdayLabels.map((day, index) => `<span class="${index === 0 ? 'sunday' : index === 6 ? 'saturday' : ''}">${day}</span>`).join('')}</div>
          <div class="calendar-grid">${calendar.days.map((day) => `<div class="calendar-day ${day.outside ? 'is-outside' : ''} ${day.today ? 'is-today' : ''}"><time datetime="${day.date}">${day.number}</time><div class="calendar-events">${(eventsByDate[day.date] ?? []).map((event) => event.type === 'survey' ? `<button type="button" class="calendar-event survey" data-survey-id="${event.surveyId}">${event.title}</button>` : `<span class="calendar-event event">${event.title}</span>`).join('')}</div></div>`).join('')}</div>
        </section>
        <aside class="survey-panel" aria-label="오늘 제출할 설문"><header><p>2026. 09. 03</p><h2>오늘 제출할 설문</h2><span>${todaySurveys.length}개</span></header>${SurveyList('pending', '미제출 설문')}${SurveyList('complete', '제출 완료 설문')}<p class="survey-panel-note">캘린더의 보라색 설문 일정을 누르면 작성 화면을 열 수 있습니다.</p></aside>
      </div>
    </section>
  `
}

function AdminDashboard() {
  const alerts = [
    { title: '최근 출석률 저조', count: '3명', people: ['김민지 · 최근 72%', '이도윤 · 최근 74%', '최유진 · 최근 76%'], type: '출결' },
    { title: '마감 후 설문 미제출', count: '2명', people: ['이도윤 · 3주차 운영 설문', '박지후 · 3주차 운영 설문'], type: '설문' },
    { title: '2일 연속 과제 미제출', count: '2명', people: ['김민지 · Part 3 과제', '정준호 · Part 3 과제'], type: '과제' },
    { title: '과제 제출률 저조', count: '4명', people: ['김민지 · 제출률 55%', '정준호 · 제출률 61%', '최유진 · 제출률 64%', '박지후 · 제출률 67%'], type: '과제' },
  ]
  return `
    <section class="admin-view" data-admin-view hidden aria-labelledby="admin-title">
      <header class="page-header admin-page-header"><div><p>AI리더 7기 · 운영 센터</p><h1 id="admin-title">운영 대시보드</h1></div><button class="quiet-button" type="button" data-learner-demo>수강생 화면으로</button></header>
      <section class="admin-alerts" aria-label="우선 확인 대상">${alerts.map((alert) => `
        <article class="admin-alert-card"><header><h2>${alert.title}</h2><strong>${alert.count}</strong></header><ul>${alert.people.map((person) => `<li><span>${person}</span><b>${alert.type}</b></li>`).join('')}</ul><button type="button" class="admin-text-button">전체 명단 보기</button></article>
      `).join('')}</section>
      <div class="admin-detail-grid">
        <section class="admin-panel"><header><h2>데이터 반영 기준</h2><button class="admin-text-button" type="button">연동 설정</button></header><ul class="admin-list"><li><span>출결 시트</span><b>어제 23:59 기준</b></li><li><span>과제 현황 시트</span><b>오늘 09:00 기준</b></li><li><span>설문 응답 시트</span><b>오늘 09:00 기준</b></li></ul></section>
        <section class="admin-panel"><header><h2>바로가기</h2></header><ul class="admin-list"><li><span>캠프 캘린더</span><b>공지 · 설문 · 이벤트 관리</b></li><li><span>수강생 관리</span><b>등록 · 수정 · 삭제</b></li><li><span>챗봇 관리</span><b>블로그 안내 확인</b></li></ul></section>
      </div>
      <section class="admin-panel admin-student-panel"><header><h2>수강생 관리</h2><button class="add-button" type="button">+ 수강생 등록</button></header><div class="admin-student-head"><span>수강생</span><span>출석률</span><span>과제 제출률</span><span>설문 제출률</span><span>관리</span></div><div class="admin-student-row"><strong>박서현</strong><span>94%</span><span>81%</span><span>100%</span><button class="admin-text-button" type="button">정보 수정</button></div><div class="admin-student-row is-alert"><strong>김민지</strong><span>72%</span><span>55%</span><span>67%</span><button class="admin-text-button" type="button">수정 · 삭제</button></div><div class="admin-student-row is-alert"><strong>이도윤</strong><span>74%</span><span>71%</span><span>50%</span><button class="admin-text-button" type="button">수정 · 삭제</button></div></section>
    </section>
  `
}

function Dashboard() {
  const { learner, schedule, todo, assignment, attendance } = mockDashboardData
  const noticeCard = Card({
    title: '오늘의 공지',
    className: 'notice-card top-card',
    action: '<button class="quiet-button" type="button" data-past-notices>지난 공지</button>',
    content: `
      <div class="notice-content">
        <p>공지사항을 클릭하여 상세 내용을 확인해 주세요.</p>
        <ul data-notice-list></ul>
      </div>
    `,
  })
  const scheduleCard = ScheduleCard(schedule)
  const todoCard = Card({
    title: 'To Do',
    className: 'todo-card top-card',
    action: `<span class="todo-date">${todo.date}</span><div class="todo-actions"><button class="quiet-button" type="button">지난 To Do</button><button class="add-button" type="button" data-add-todo>+ 추가</button></div>`,
    content: '<ul class="todo-list" data-todo-list></ul><div class="todo-summary"><span data-todo-summary></span><div class="todo-progress" aria-hidden="true"><i data-todo-progress></i></div></div>',
  })
  const assignmentCard = Card({
    title: '나의 과제 진도율',
    className: 'metric-card assignment-card',
    action: '<a class="quiet-button" href="https://app.notion.com/p/3cfcaf5650aa8069a13ac3d2a2138f7e" target="_blank" rel="noreferrer">과제 페이지 이동</a>',
    content: `
      <div class="assignment-content">
        <div class="circle-progress" style="--progress: ${assignment.total * 3.6}deg" role="progressbar" aria-label="나의 과제 진도율" aria-valuenow="${assignment.total}" aria-valuemin="0" aria-valuemax="100"><i class="circle-progress-start" aria-hidden="true"></i><span>${assignment.total}%</span></div>
        <div class="assignment-details"><div class="part-status">${assignment.parts.map((part) => `
          <div class="part-row"><strong>${part.name}</strong><div class="part-blocks">${part.blocks.map((status) => `<i class="${status}" role="img" aria-label="${status === 'complete' ? '과제 완료' : status === 'incomplete' ? '과제 미완료' : status === 'upcoming' ? '다가오는 일정' : '이후 일정'}"></i>`).join('')}</div><span>${part.label}</span></div>
        `).join('')}</div><div class="assignment-legend" aria-label="과제 상태 범례"><span><i class="complete" aria-hidden="true"></i>과제 완료</span><span><i class="incomplete" aria-hidden="true"></i>과제 미완료</span><span><i class="future" aria-hidden="true"></i>예정</span></div></div>
      </div>
    `,
  })
  const attendanceCard = Card({
    title: '나의 출석률',
    className: 'metric-card attendance-card',
    action: '<button class="quiet-button" type="button">출결 내역</button>',
    content: `
      <div class="attendance-content"><div class="attendance-rate"><strong>${attendance.rate}%</strong><span>최근 1주 새싹이</span></div><div class="attendance-bars">${attendance.periods.map((period) => ProgressBar({ value: period.rate, label: period.label })).join('')}</div></div>
    `,
  })
  return `
    ${Sidebar(learner)}
    <main id="home" class="dashboard">
      <div data-home-view>
      <header class="page-header">
        <div><p>${learner.part}</p><h1>${learner.greeting}</h1></div>
      </header>
      <div class="top-grid">${noticeCard}${scheduleCard}${todoCard}</div>
      <div class="bottom-grid">${assignmentCard}${attendanceCard}</div>
      </div>
      ${AdminDashboard()}
      <section class="faq-view" data-faq-view hidden aria-labelledby="faq-title">
        <header class="page-header faq-header"><div><p>AI리더 지원</p><h1 id="faq-title">FAQ</h1></div><a class="blog-link-button" href="https://oz-ai-leader.blogspot.com/" target="_blank" rel="noreferrer">블로그로 확인하기</a></header>
        <div class="faq-embed-card">
          <iframe class="faq-embed" src="https://oz-ai-leader.blogspot.com/" title="AI리더 FAQ 블로그" loading="lazy"></iframe>
        </div>
      </section>
      ${CampCalendarView()}
    </main>
    <div class="modal-layer" data-modal hidden></div>
    ${Chatbot()}
  `
}

function attachInteractions() {
  document.querySelectorAll('[data-dashboard-view]').forEach((button) => {
    button.addEventListener('click', () => {
      const isFaq = button.dataset.dashboardView === 'faq'
      const isCalendar = button.dataset.dashboardView === 'calendar'
      if (!button.dataset.dashboardView) return
      document.querySelector('[data-home-view]').hidden = isFaq || isCalendar
      document.querySelector('[data-faq-view]').hidden = !isFaq
      document.querySelector('[data-calendar-view]').hidden = !isCalendar
      document.querySelector('[data-admin-view]').hidden = true
      document.querySelector('[data-admin-demo]').setAttribute('aria-pressed', 'false')
      document.querySelectorAll('[data-dashboard-view]').forEach((item) => {
        const active = item === button
        item.classList.toggle('is-active', active)
        item.setAttribute('aria-current', active ? 'page' : 'false')
      })
    })
  })
  document.querySelector('[data-admin-demo]').addEventListener('click', () => {
    document.querySelector('[data-home-view]').hidden = true
    document.querySelector('[data-faq-view]').hidden = true
    document.querySelector('[data-calendar-view]').hidden = true
    document.querySelector('[data-admin-view]').hidden = false
    document.querySelectorAll('[data-dashboard-view]').forEach((item) => {
      item.classList.remove('is-active')
      item.setAttribute('aria-current', 'false')
    })
    document.querySelector('[data-admin-demo]').setAttribute('aria-pressed', 'true')
  })
  document.querySelector('[data-learner-demo]').addEventListener('click', () => {
    const homeButton = document.querySelector('[data-dashboard-view="home"]')
    homeButton.click()
  })
  document.querySelector('[data-todo-list]').addEventListener('change', (event) => {
    const checkbox = event.target.closest('[data-todo-id]')
    if (!checkbox) return
    todoItems = todoItems.map((item) => item.id === Number(checkbox.dataset.todoId) ? { ...item, completed: checkbox.checked } : item)
    renderTodoItems()
  })
  document.querySelector('[data-todo-list]').addEventListener('click', (event) => {
    const actionButton = event.target.closest('[data-todo-action]')
    if (!actionButton) return
    const { todoAction, todoId } = actionButton.dataset
    const targetTodo = todoItems.find((item) => item.id === Number(todoId))
    if (targetTodo?.tag && (todoAction === 'edit' || todoAction === 'delete')) return
    if (todoAction === 'edit') {
      editingTodoId = Number(todoId)
      isAddingTodo = false
    }
    if (todoAction === 'delete') {
      todoItems = todoItems.filter((item) => item.id !== Number(todoId))
    }
    if (todoAction === 'cancel') {
      isAddingTodo = false
      editingTodoId = null
    }
    if (todoAction === 'save') {
      const editor = actionButton.closest('[data-todo-editor]')
      const input = editor.querySelector('[data-todo-input]')
      const text = input.value.trim()
      if (!text) {
        input.focus()
        return
      }
      if (todoId === 'new') todoItems = [...todoItems, { id: Date.now(), text, completed: false }]
      else todoItems = todoItems.map((item) => item.id === Number(todoId) ? { ...item, text } : item)
      isAddingTodo = false
      editingTodoId = null
    }
    renderTodoItems()
  })
  document.querySelector('[data-todo-list]').addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || !event.target.matches('[data-todo-input]')) return
    event.preventDefault()
    event.target.closest('[data-todo-editor]').querySelector('[data-todo-action="save"]').click()
  })
  document.querySelector('[data-add-todo]').addEventListener('click', () => {
    isAddingTodo = true
    editingTodoId = null
    renderTodoItems()
  })
  document.querySelector('[data-notice-list]').addEventListener('click', (event) => {
    const surveyToggle = event.target.closest('[data-toggle-survey-notice]')
    if (surveyToggle) {
      const noticeId = Number(surveyToggle.dataset.toggleSurveyNotice)
      noticeItems = noticeItems.map((notice) => notice.id === noticeId ? { ...notice, confirmed: !notice.confirmed } : notice)
      renderNotices()
      return
    }
    const noticeButton = event.target.closest('[data-notice-id]')
    if (noticeButton) openNoticeAction(Number(noticeButton.dataset.noticeId))
  })
  document.querySelector('[data-past-notices]').addEventListener('click', showPastNotices)
  document.querySelector('[data-calendar-view]').addEventListener('click', (event) => {
    const surveyButton = event.target.closest('[data-survey-id]')
    if (surveyButton) showSurveyModal(surveyButton.dataset.surveyId)
  })
  document.querySelector('[data-qr-toggle]').addEventListener('click', showQrModal)
  document.querySelector('[data-modal]').addEventListener('click', (event) => {
    if (event.target.closest('[data-close-modal], [data-modal-close]')) closeModal()
    const confirmButton = event.target.closest('[data-confirm-notice]')
    if (!confirmButton || confirmButton.disabled) return
    noticeItems = noticeItems.map((notice) => notice.id === Number(confirmButton.dataset.confirmNotice) ? { ...notice, confirmed: true } : notice)
    renderNotices()
    closeModal()
  })
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !document.querySelector('[data-modal]').hidden) closeModal()
  })
  const chatPanel = document.querySelector('[data-chat-panel]')
  const chatToggle = document.querySelector('[data-chat-toggle]')
  const setChatOpen = (isOpen) => {
    chatPanel.hidden = !isOpen
    chatToggle.setAttribute('aria-expanded', String(isOpen))
    if (isOpen) {
      renderChatMessages()
      chatPanel.querySelector('input').focus()
    } else {
      chatToggle.focus()
    }
  }
  document.querySelector('[data-chatbot]').addEventListener('click', (event) => {
    if (event.target.closest('[data-chat-close]')) {
      event.preventDefault()
      setChatOpen(false)
      return
    }
    if (event.target.closest('[data-chat-toggle]')) setChatOpen(chatPanel.hidden)
  })
  document.querySelector('[data-chat-form]').addEventListener('submit', (event) => {
    event.preventDefault()
    const input = event.currentTarget.querySelector('input')
    sendChatMessage(input.value)
    input.value = ''
    input.focus()
  })
  document.querySelectorAll('[data-chat-question]').forEach((button) => button.addEventListener('click', () => {
    sendChatMessage(button.dataset.chatQuestion)
  }))
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !chatPanel.hidden) setChatOpen(false)
  })
}

document.querySelector('#app').innerHTML = Dashboard()
renderNotices()
renderTodoItems()
attachInteractions()
