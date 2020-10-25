import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Counter } from './Counter';

export class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      terminalHeader1: 'HazTech Bash Terminal v06.12.20',
      terminalHeader2: 'First login attempt: late February 2020',
      terminalBefore: 'brideFirst-oldLast@device:~',
      terminalAfter: 'brideFirst-newLast@device:~',
      typeSpeed: 300,
      twoSeconds: 2000,
      tenSeconds: 10000,
      thirtySeconds: 30000
    };
  }

  writeTerminalCommand(stringToWrite, commandNumber) {
    let index = 0;
    setTimeout(() => {
      const addLetters = setInterval(() => {
        if (index === stringToWrite.length) {
          clearInterval(addLetters);

          switch (commandNumber) {
            case 1:
              this.setState({
                commandOne: this.state.commandOne + '\n'
              });
              this.terminalCommandResponse(
                '-bash error: ./setup.sh: Permission denied',
                commandNumber
              );
              break;
            case 2:
              this.setState({
                commandTwo: this.state.commandTwo + '\n'
              });
              this.terminalCommandResponse('Enter password: ', commandNumber);
              break;
            case 3:
              this.setState({
                commandTwo: this.state.commandTwo + '\n\n'
              });
              this.terminalCommandResponse(
                '-bash error: this user account needs updating',
                commandNumber
              );
              break;
            case 4:
              this.setState({
                commandThree: this.state.commandThree + '\n'
              });
              this.terminalCommandResponse(
                'Initialising user update...',
                commandNumber
              );
              break;
            case 5:
              this.setState({
                commandThree: this.state.commandThree + 'COMPLETED\n'
              });
              this.terminalCommandResponse(
                'Injecting malware into nearby vehicle',
                commandNumber
              );
              break;
            case 6:
              this.setState({
                commandThree: this.state.commandThree + 'COMPLETED\n'
              });
              this.terminalCommandResponse(
                'Triggering remote boot unlock',
                commandNumber
              );
              break;
            case 7:
              this.setState({
                commandThree: this.state.commandThree + 'COMPLETED\n\n\n'
              });
              this.terminalCommandResponse(
                '*** PLEASE TURN AROUND ***',
                commandNumber
              );
              break;
            case 8:
              this.setState({
                commandThree: this.state.commandThree + '\n\n'
              });
              this.terminalCommandResponse(
                `Success, logging in as '${
                  this.state.terminalAfter.split('@')[0]
                }'...`,
                commandNumber
              );
              break;
            case 9:
              this.setState({
                commandFour: this.state.commandFour + '\n'
              });
              this.terminalCommandResponse(
                `Successfully initialised ${this.props.bride} and ${this.props.groom}'s wedding`,
                commandNumber
              );
              break;
            case 10:
              this.setState({
                commandFive: this.state.commandFive + '\n'
              });
              this.terminalCommandResponse(`That's all folks!`, commandNumber);
              break;
            default:
              break;
          }
        } else {
          switch (commandNumber) {
            case 1:
              this.setState({
                commandOne: this.state.commandOne + stringToWrite.charAt(index)
              });
              break;
            case 2:
            case 3:
              this.setState({
                commandTwo: this.state.commandTwo + stringToWrite.charAt(index)
              });
              break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
              this.setState({
                commandThree:
                  this.state.commandThree + stringToWrite.charAt(index)
              });
              break;
            case 9:
              this.setState({
                commandFour:
                  this.state.commandFour + stringToWrite.charAt(index)
              });
              break;
            case 10:
              this.setState({
                commandFive:
                  this.state.commandFive + stringToWrite.charAt(index)
              });
              break;
            default:
              break;
          }
        }
        index++;
      }, this.state.typeSpeed);
    }, this.state.twoSeconds);
  }

  terminalCommandResponse(command, commandNumber) {
    switch (commandNumber) {
      case 1:
        this.setState({
          commandOne: this.state.commandOne + command + '\n\n',
          commandTwo: '$ '
        });
        this.writeTerminalCommand('sudo sh setup.sh', 2);
        break;
      case 2:
        this.setState({
          commandTwo: this.state.commandTwo + command
        });
        this.writeTerminalCommand('********', 3);
        break;
      case 3:
        this.setState({
          commandTwo:
            this.state.commandTwo +
            command +
            '\n\n' +
            'Please try running `sudo update-user` first' +
            '\n\n',
          commandThree: '$ '
        });
        this.writeTerminalCommand('sudo update-user', 4);
        break;
      case 4:
        this.setState({
          commandThree:
            this.state.commandThree + command + '\n\nLoading user files'
        });
        this.writeTerminalCommand(
          ' . . . . . . . . . . . . . . . . . . . . . . . . ',
          5
        );
        break;
      case 5:
        this.setState({
          commandThree: this.state.commandThree + command
        });
        this.writeTerminalCommand(' . . . . . . . ', 6);
        break;
      case 6:
        if (window.Android) window.Android.openBoot();
        this.setState({
          commandThree: this.state.commandThree + command
        });
        this.writeTerminalCommand(' . . . . . . . . . . . . . ', 7);
        break;
      case 7:
        this.setState({
          commandThree: this.state.commandThree + command
        });
        setTimeout(() => {
          this.setState({
            commandThree:
              this.state.commandThree +
              `\n\n\nThis will update user '${
                this.state.terminalBefore.split('@')[0]
              }' to '${
                this.state.terminalAfter.split('@')[0]
              }'\n\nAre you sure you want to continue? [Y/n] `
          });
          setTimeout(
            () => this.writeTerminalCommand('Y', 8),
            this.state.tenSeconds
          );
        }, this.state.thirtySeconds);
        break;
      case 8:
        this.setState({
          commandThree: this.state.commandThree + command + '\n\n',
          commandFour: '$ '
        });
        this.writeTerminalCommand('sudo sh setup.sh', 9);
        break;
      case 9:
        this.setState({
          commandFour:
            this.state.commandFour +
            command +
            '\n\nPlease confirm DATE, TIME and LOCATION to continue...\n\n',
          commandFive: '$ '
        });
        setTimeout(
          () => this.writeTerminalCommand('exit', 10),
          this.state.tenSeconds
        );
        break;
      case 10:
        this.setState({
          commandFive: this.state.commandFive + command
        });
        setTimeout(() => {
          this.setState({ showTerminal: false, showCountdown: true });
          if (window.Android) window.Android.clearFlag();
        }, this.state.tenSeconds);
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    if (window.Android) window.Android.setFlag();

    let counter = 0;
    const initialisationTimer = setInterval(() => {
      const elipses = '...';
      let index = 0;
      const addElipses = setInterval(() => {
        if (index === elipses.length) {
          clearInterval(addElipses);
        } else {
          this.setState({
            message: this.state.message + elipses.charAt(index)
          });
        }
        index++;
      }, this.state.typeSpeed);

      switch (counter) {
        case 0:
          this.setState({ message: 'Please wait, system loading' });
          break;
        case 1:
          this.setState({ message: 'Establishing connection' });
          break;
        case 2:
          this.setState({ message: 'Downloading resources' });
          break;
        case 3:
          this.setState({ message: 'Rendering UI' });
          break;
        case 4:
          this.setState({
            showTerminal: true,
            commandOne: '$ '
          });
          break;
        case 5:
          this.writeTerminalCommand('sh setup.sh', 1);
          break;
        default:
          clearInterval(initialisationTimer);
      }
      counter++;
    }, this.state.twoSeconds);
  }

  render() {
    return this.state.showTerminal ? (
      // terminal screen
      <div className="terminal">
        {this.state.terminalHeader1}
        <br />
        {this.state.terminalHeader2}
        <br />
        <br />
        {this.state.terminalBefore}
        {this.state.commandOne ? <span>{this.state.commandOne}</span> : null}
        {this.state.commandTwo ? this.state.terminalBefore : null}
        {this.state.commandTwo ? <span>{this.state.commandTwo}</span> : null}
        {this.state.commandThree ? this.state.terminalBefore : null}
        {this.state.commandThree ? (
          <span>{this.state.commandThree}</span>
        ) : null}
        {this.state.commandFour ? this.state.terminalAfter : null}
        {this.state.commandFour ? <span>{this.state.commandFour}</span> : null}
        {this.state.commandFive ? this.state.terminalAfter : null}
        {this.state.commandFive ? <span>{this.state.commandFive}</span> : null}
        <span className="blink">&nbsp;&nbsp;</span>
      </div>
    ) : this.state.showCountdown ? (
      // show countdown if terminal complete
      <Counter
        bride={this.props.bride}
        groom={this.props.groom}
        time={this.props.countdown}
        isCountdown={true}
      />
    ) : (
      // show initialisation messages at first boot
      <div className="middle-align green">{this.state.message}</div>
    );
  }
}

Terminal.propTypes = {
  bride: PropTypes.string.isRequired,
  groom: PropTypes.string.isRequired,
  countdown: PropTypes.string.isRequired
};
