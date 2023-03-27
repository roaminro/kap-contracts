import { Writer, Reader } from "as-proto";

export namespace collections {
  export class mint_event {
    static encode(message: mint_event, writer: Writer): void {
      if (message.to.length != 0) {
        writer.uint32(10);
        writer.bytes(message.to);
      }

      if (message.token_id.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token_id);
      }
    }

    static decode(reader: Reader, length: i32): mint_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new mint_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.to = reader.bytes();
            break;

          case 2:
            message.token_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    to: Uint8Array;
    token_id: Uint8Array;

    constructor(
      to: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0)
    ) {
      this.to = to;
      this.token_id = token_id;
    }
  }

  export class burn_event {
    static encode(message: burn_event, writer: Writer): void {
      if (message.from.length != 0) {
        writer.uint32(10);
        writer.bytes(message.from);
      }

      if (message.token_id.length != 0) {
        writer.uint32(18);
        writer.bytes(message.token_id);
      }
    }

    static decode(reader: Reader, length: i32): burn_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new burn_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.from = reader.bytes();
            break;

          case 2:
            message.token_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    from: Uint8Array;
    token_id: Uint8Array;

    constructor(
      from: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0)
    ) {
      this.from = from;
      this.token_id = token_id;
    }
  }

  export class transfer_event {
    static encode(message: transfer_event, writer: Writer): void {
      if (message.from.length != 0) {
        writer.uint32(10);
        writer.bytes(message.from);
      }

      if (message.to.length != 0) {
        writer.uint32(18);
        writer.bytes(message.to);
      }

      if (message.token_id.length != 0) {
        writer.uint32(26);
        writer.bytes(message.token_id);
      }
    }

    static decode(reader: Reader, length: i32): transfer_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new transfer_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.from = reader.bytes();
            break;

          case 2:
            message.to = reader.bytes();
            break;

          case 3:
            message.token_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    from: Uint8Array;
    to: Uint8Array;
    token_id: Uint8Array;

    constructor(
      from: Uint8Array = new Uint8Array(0),
      to: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0)
    ) {
      this.from = from;
      this.to = to;
      this.token_id = token_id;
    }
  }

  export class operator_approval_event {
    static encode(message: operator_approval_event, writer: Writer): void {
      if (message.approver_address.length != 0) {
        writer.uint32(10);
        writer.bytes(message.approver_address);
      }

      if (message.operator_address.length != 0) {
        writer.uint32(18);
        writer.bytes(message.operator_address);
      }

      if (message.approved != false) {
        writer.uint32(24);
        writer.bool(message.approved);
      }
    }

    static decode(reader: Reader, length: i32): operator_approval_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new operator_approval_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.approver_address = reader.bytes();
            break;

          case 2:
            message.operator_address = reader.bytes();
            break;

          case 3:
            message.approved = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    approver_address: Uint8Array;
    operator_address: Uint8Array;
    approved: bool;

    constructor(
      approver_address: Uint8Array = new Uint8Array(0),
      operator_address: Uint8Array = new Uint8Array(0),
      approved: bool = false
    ) {
      this.approver_address = approver_address;
      this.operator_address = operator_address;
      this.approved = approved;
    }
  }

  export class token_approval_event {
    static encode(message: token_approval_event, writer: Writer): void {
      if (message.approver_address.length != 0) {
        writer.uint32(10);
        writer.bytes(message.approver_address);
      }

      if (message.to.length != 0) {
        writer.uint32(18);
        writer.bytes(message.to);
      }

      if (message.token_id.length != 0) {
        writer.uint32(26);
        writer.bytes(message.token_id);
      }
    }

    static decode(reader: Reader, length: i32): token_approval_event {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new token_approval_event();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.approver_address = reader.bytes();
            break;

          case 2:
            message.to = reader.bytes();
            break;

          case 3:
            message.token_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    approver_address: Uint8Array;
    to: Uint8Array;
    token_id: Uint8Array;

    constructor(
      approver_address: Uint8Array = new Uint8Array(0),
      to: Uint8Array = new Uint8Array(0),
      token_id: Uint8Array = new Uint8Array(0)
    ) {
      this.approver_address = approver_address;
      this.to = to;
      this.token_id = token_id;
    }
  }
}
