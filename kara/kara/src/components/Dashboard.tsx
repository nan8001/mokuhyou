import React from 'react';

const Dashboard: React.FC = () => {
  const [goal, setGoal] = React.useState("");
  const [goals, setGoals] = React.useState<string[]>([
    "2025年末までに英語力をTOEIC800点にする",
    "2026年までに新規事業を立ち上げる"
  ]);

  // 日記欄の状態管理
  const [diary, setDiary] = React.useState("");
  const [savedDiary, setSavedDiary] = React.useState<string | null>(null);

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (goal.trim()) {
      setGoals([...goals, goal.trim()]);
      setGoal("");
    }
  };

  const handleSaveDiary = () => {
    setSavedDiary(diary);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>目標管理ダッシュボード</h1>
      <p>中長期目標の一覧や進捗をここで管理できます。</p>

      {/* 目標記入欄 */}
      <form onSubmit={handleAddGoal} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <label htmlFor="goal-input" style={{ fontWeight: 'bold' }}>新しい目標を記入：</label>
        <input
          id="goal-input"
          type="text"
          value={goal}
          onChange={e => setGoal(e.target.value)}
          style={{ marginLeft: '1rem', padding: '0.5rem', width: '300px' }}
          placeholder="例：2027年までに資格取得"
        />
        <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>追加</button>
      </form>

      <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '1rem', background: '#f9f9f9' }}>
        <h2>目標一覧</h2>
        <ul>
          {goals.map((g, idx) => (
            <li key={idx}>{g}</li>
          ))}
        </ul>
      </div>

      {/* 日記形式の進捗記入欄 */}
      <section style={{ marginTop: '2rem' }}>
        <h2>進捗日記</h2>
        <textarea
          value={diary}
          onChange={e => setDiary(e.target.value)}
          rows={6}
          style={{ width: '100%', resize: 'vertical', marginBottom: '0.5rem' }}
          placeholder="今日の進捗や達成度を自由に記入してください"
        />
        <br />
        <button onClick={handleSaveDiary} style={{ marginTop: '0.5rem' }}>保存</button>
        {savedDiary && (
          <div style={{ marginTop: '1rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
            <strong>保存した日記:</strong>
            <p style={{ whiteSpace: 'pre-wrap' }}>{savedDiary}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
