/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { LogOptions, LogFnOptions } from './logger.types'

class Logger {
  private options: LogOptions
  constructor(options: LogOptions) {
    this.options = options
  }

  private prettyfy(arg: unknown): unknown {
    if (['string', 'number', 'boolean'].includes(typeof arg)) return arg
    return JSON.stringify(arg, null, 2)
  }

  private formatLog(level: string, arg: unknown, options?: LogFnOptions): string {
    const { prettify, title } = { ...this.options, ...options }
    const prettyLog = prettify ? this.prettyfy(arg) : arg
    const titleLog = `${title ? `${title}: ` : ''}${prettyLog}`
    const log = `${new Date().toISOString()} [${level.toUpperCase()}] ${titleLog}`
    return log
  }

  debug(arg: unknown, options?: LogFnOptions): void {
    const log = this.formatLog('debug', arg, options)
    console.log('\x1b[36m%s\x1b[0m', log)
  }
  d(arg: unknown, options?: LogFnOptions): void {
    this.debug(arg, options)
  }

  info(arg: unknown, options?: LogFnOptions): void {
    const log = this.formatLog('info', arg, options)
    console.log('\x1b[32m%s\x1b[0m', log)
  }
  i(arg: unknown, options?: LogFnOptions): void {
    this.info(arg, options)
  }

  warn(arg: unknown, options?: LogFnOptions): void {
    const log = this.formatLog('warn', arg, options)
    console.log('\x1b[33m%s\x1b[0m', log)
  }
  w(arg: unknown, options?: LogFnOptions): void {
    this.warn(arg, options)
  }

  error(arg: unknown, options?: LogFnOptions): void {
    const log = this.formatLog('error', arg, options)
    console.log('\x1b[31m%s\x1b[0m', log)
  }
  e(arg: unknown, options?: LogFnOptions): void {
    this.error(arg, options)
  }
}

export const createLogger = (options: LogOptions): Logger => {
  return new Logger(options)
}

export const Log = createLogger({ prettify: true })
