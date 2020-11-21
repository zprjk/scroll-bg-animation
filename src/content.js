import Card from './components/card';
import Section from './components/section';

function Content() {
  return (
    <>
      <Section url="https://source.unsplash.com/1920x1080/?people">
        <Card size="small" />
        <Card size="medium" />
      </Section>

      <Section url="https://source.unsplash.com/1921x1081/?people">
        <Card size="large" />
      </Section>

      <Section url="https://source.unsplash.com/1922x1082/?people">
        <Card size="small" />
        <Card size="small" />
        <Card size="small" />
      </Section>

      <Section url="https://source.unsplash.com/1923x1083/?people">
        <Card size="large" />
      </Section>

      <Section url="https://source.unsplash.com/1924x1084/?people">
        <Card size="medium" />
        <Card size="small" />
        <Card size="medium" />
      </Section>

      <Section url="https://source.unsplash.com/1925x1085/?people">
        <Card size="large" />
      </Section>
    </>
  );
}

export default Content;
