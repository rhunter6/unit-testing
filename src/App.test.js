import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  // To see the DOM that React Testing Library looks at:
  // screen.debug();

  // I generally use getByText().
  // const linkElement = screen.getByText(/click count/i);
  // expect(linkElement).toBeInTheDocument();

  // But the docs say you should first use getByRole().
  // To get a list of suggested roles to query by:
  // screen.getByRole('');

  // It can't find header, but it is in the document.
  // You have to use the roles as defined in 
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
  // expect(screen.getByRole('header')).toBeInTheDocument();

  // You have to use the role of banner.
  // expect(screen.getByRole('banner')).toBeInTheDocument();

});
