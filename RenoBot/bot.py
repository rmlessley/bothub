import discord
from discord.ext.commands import Bot

import secrets

reno = Bot(command_prefix="!reno ")

@reno.event
async def on_read():
	print("Client logged in")

@reno.command(aliases=['yo', 'hi'])
async def hello(*args):
	print(args)
	return await reno.say("Hello, world!")

reno.run(secrets.BOT_TOKEN)