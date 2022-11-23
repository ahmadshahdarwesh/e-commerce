import Alert from 'react-bootstrap/Alert';

export default function MessageBox() {
  return (
    <Alert variant={props.variant || 'info'}>{props.children}</Alert>
  );
}
