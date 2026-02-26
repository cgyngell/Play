const STATUS_COLORS = {
  admitted: { bg: 'rgba(22, 163, 74, 0.12)', border: 'rgba(22, 163, 74, 0.3)', color: '#22c55e' },
  enrolled: { bg: 'rgba(37, 99, 235, 0.12)', border: 'rgba(37, 99, 235, 0.3)', color: '#3b82f6' },
  applied: { bg: 'rgba(212, 168, 67, 0.12)', border: 'rgba(212, 168, 67, 0.3)', color: '#d4a843' },
  denied: { bg: 'rgba(220, 38, 38, 0.12)', border: 'rgba(220, 38, 38, 0.3)', color: '#dc2626' },
  prospect: { bg: 'rgba(147, 51, 234, 0.12)', border: 'rgba(147, 51, 234, 0.3)', color: '#a855f7' },
  default: { bg: 'rgba(100, 116, 139, 0.12)', border: 'rgba(100, 116, 139, 0.3)', color: '#94a3b8' },
};

function StatusBadge({ status }) {
  if (!status) return null;
  const key = status.toLowerCase();
  const style = STATUS_COLORS[key] || STATUS_COLORS.default;
  return (
    <span
      className="status-badge"
      style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.color }}
    >
      {status}
    </span>
  );
}

function FieldRow({ label, value }) {
  if (!value && value !== 0) return null;
  return (
    <div className="applicant-field">
      <span className="field-label">{label}</span>
      <span className="field-value">{value}</span>
    </div>
  );
}

export default function ApplicantCard({ applicant }) {
  if (!applicant) return null;

  const name = applicant.name ||
    [applicant.first_name, applicant.last_name].filter(Boolean).join(' ') ||
    applicant.full_name ||
    'Unknown';

  const email = applicant.email || applicant.email_address;
  const program = applicant.program || applicant.prog || applicant.major;
  const status = applicant.status || applicant.app_status;
  const round = applicant.round || applicant.decision_round;
  const gpa = applicant.gpa || applicant.hs_gpa;
  const sat = applicant.sat || applicant.sat_total;
  const act = applicant.act || applicant.act_composite;
  const city = applicant.city || applicant.hometown_city;
  const state = applicant.state || applicant.hometown_state;
  const location = [city, state].filter(Boolean).join(', ');
  const id = applicant.id || applicant.person_id || applicant.ref;

  return (
    <div className="applicant-card">
      <div className="applicant-card-header">
        <div className="applicant-avatar">
          {name.charAt(0).toUpperCase()}
        </div>
        <div className="applicant-primary">
          <div className="applicant-name">{name}</div>
          {email && <div className="applicant-email">{email}</div>}
        </div>
        <div className="applicant-status-area">
          {status && <StatusBadge status={status} />}
        </div>
      </div>

      <div className="applicant-fields">
        <FieldRow label="Program" value={program} />
        <FieldRow label="Round" value={round} />
        <FieldRow label="Location" value={location} />
        <FieldRow label="GPA" value={gpa} />
        <FieldRow label="SAT" value={sat} />
        <FieldRow label="ACT" value={act} />
        {id && <FieldRow label="ID" value={id} />}
      </div>
    </div>
  );
}
