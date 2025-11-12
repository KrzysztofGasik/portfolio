import { useTheme } from '@/context/dark-mode-context';
import classes from './overview.module.css';

export default function Overview() {
  return (
    <h3 className={classes.overviewText}>
      I'm passionate about building frontend solutions that not only meet
      today's requirements but are designed to evolve. Whether it's refactoring
      legacy code or architecting new systems, I focus on creating maintainable,
      scalable foundations.
    </h3>
  );
}
