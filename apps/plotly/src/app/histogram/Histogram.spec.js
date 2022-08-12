import { render } from '@testing-library/react';
import Histogram from './Histogram';
describe('Histogram', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Histogram />);
    expect(baseElement).toBeTruthy();
  });
});
