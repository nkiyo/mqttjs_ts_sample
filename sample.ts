import * as mqtt from "mqtt"
import { MqttClient } from 'mqtt/types/lib/client'

const client: MqttClient  = mqtt.connect('mqtt://localhost')

client.on('connect', function () {
  client.subscribe('presence', function (err: Error) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic: string, message: Buffer) {
  console.log(message.toString())
  client.end()
})