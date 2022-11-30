import { Container } from "./styles.js";

export function Button({title, loading}){
  return (
  <Container 
    type="button"
    disabled = {loading}>

      
    {loading ? 'Carregando...' : title }
  </Container>
  );
}