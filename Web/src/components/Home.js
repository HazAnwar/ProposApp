import React, { Component } from 'react';
import { Terminal } from './Terminal';
import { Counter } from './Counter';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bride: 'Bride',
      groom: 'Groom',
      currentDate: new Date(),
      proposalDate: new Date('2020-10-25T19:00:00'),
      weddingDate: new Date('2021-08-01T11:59:59')
    };
  }

  checkDates(currentDate, proposalDate, weddingDate) {
    if (currentDate < proposalDate) {
      return 'single';
    } else if (currentDate > proposalDate && currentDate < weddingDate) {
      return 'engaged';
    } else {
      return 'married';
    }
  }

  timeBetween(dateOne, dateTwo) {
    const numDaysInYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = Math.round((dateOne - dateTwo) / (1000 * 60 * 60 * 24));
    let months = 0;
    let years = 0;

    const dateOneYear = dateOne.getFullYear();
    const dateOneMonth = dateOne.getMonth();
    const dateTwoYear = dateTwo.getFullYear();
    const dateTwoMonth = dateTwo.getMonth();

    for (let year = dateTwoYear; year <= dateOneYear; year++) {
      if (year > dateTwoYear && days >= 366 && year % 4 === 0) {
        days -= 366;
        years++;
      } else if (year > dateTwoYear && days >= 365) {
        days -= 365;
        years++;
      } else {
        for (let month = 0; month < numDaysInYear.length; month++) {
          if (
            days >= numDaysInYear[month] &&
            !(year === dateTwoYear && month < dateTwoMonth) &&
            !(year === dateOneYear && month > dateOneMonth)
          ) {
            if (month === 1 && year % 4 === 0) {
              days--;
            }
            days -= numDaysInYear[month];
            months++;
          } else if (
            !(year === dateTwoYear && month < dateTwoMonth) &&
            !(year === dateOneYear && month > dateOneMonth)
          ) {
            break;
          }
        }
      }
    }

    if (months === 12) {
      years++;
      months -= 12;
    }

    const returnYear =
      years > 1 ? years + ' years' : years === 1 ? years + ' year' : '';
    const returnMonth =
      months > 1 ? months + ' months' : months === 1 ? months + ' month' : '';
    const returnDays =
      days > 1 ? days + ' days' : days === 1 ? days + ' day' : '';

    return `${returnYear}${
      returnYear !== '' && returnMonth !== '' && returnDays !== '' ? ', ' : ''
    }${
      returnYear !== '' && returnMonth !== '' && returnDays === ''
        ? ' and '
        : ''
    }${returnMonth}${
      (returnYear === '' && returnMonth === '') || returnDays === ''
        ? ''
        : ' and '
    }${returnDays}`;
  }

  render() {
    switch (
      this.checkDates(
        this.state.currentDate,
        this.state.proposalDate,
        this.state.weddingDate
      )
    ) {
      case 'single':
        // return the terminal proposal screen component
        return (
          <Terminal
            bride={this.state.bride}
            groom={this.state.groom}
            countdown={this.timeBetween(
              this.state.weddingDate,
              this.state.currentDate
            )}
          />
        );
      case 'engaged':
        // show countdown until the wedding
        return (
          <Counter
            bride={this.state.bride}
            groom={this.state.groom}
            time={this.timeBetween(
              this.state.weddingDate,
              this.state.currentDate
            )}
            isCountdown={true}
          />
        );
      case 'married':
        // show number of days married
        return (
          <Counter
            bride={this.state.bride}
            groom={this.state.groom}
            time={this.timeBetween(
              this.state.currentDate,
              this.state.weddingDate
            )}
            isCountdown={false}
          />
        );
      default:
        console.error('Something has broke');
        break;
    }
  }
}

export default Home;
