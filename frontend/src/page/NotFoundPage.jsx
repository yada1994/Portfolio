import { Link } from 'react-router'; // Import Link for navigation

function NotFoundPage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 120px)', // Adjust based on your header/footer height if needed
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f8f8f8',
      color: '#333',
    }}>
      <h1 style={{ fontSize: '4em', margin: '0.2em 0' }}>404</h1>
      <h2 style={{ fontSize: '1.5em', marginBottom: '1em' }}>Page Not Found</h2>
      <p style={{ fontSize: '1.1em', maxWidth: '600px', lineHeight: '1.5' }}>
        Oops! The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      <Link to="/" style={{
        marginTop: '2em',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontSize: '1.1em',
        transition: 'background-color 0.3s ease',
      }}>
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFoundPage;