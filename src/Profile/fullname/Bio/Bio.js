import React from 'react'
import './Bio.css'

const bio={
    player:" Tennis player",
    rafa:"Rafael Nadal Parera, plus simplement appelé Rafael Nadal, né le 3 juin 1986 à Manacor, sur l'île de Majorque, dans l'archipel des Baléares, est un joueur de tennis espagnol, professionnel depuis 2001 Il est considéré par tous les spécialistes comme le meilleur joueur sur terre battue de l'histoire du tennis1,2,3, établissant en effet des records majeurs, mais aussi comme l'un des meilleurs joueurs de simple de tous les temps avec Roger Federer et Novak Djokovic4,5,6. Il devient le détenteur du record de trophées en simple messieurs dans les tournois du Grand Chelem (22) à la suite de sa victoire à l'Open d'Australie en 2022 et est le seul joueur à avoir remporté quatorze titres dans un des quatre tournois majeurs : à Roland-Garros où il s'est imposé de 2005 à 2008, de 2010 à 2014, de 2017 à 2020 puis en 2022. Après cette victoire, il présente un bilan record de cent-douze victoires pour trois défaites dans ce tournoi parisien, et ne compte aucune défaite en finale. Il a remporté également le tournoi de Wimbledon en 2008 et 2010, l'Open d'Australie 2009 et 2022, et l'US Open 2010, 2013, 2017 et 2019. Il est ainsi le septième joueur de l'histoire du tennis à réaliser le « Grand Chelem en carrière » en simple. À ce titre, Rafael Nadal est le troisième joueur et le plus jeune à s'être imposé durant l'ère Open dans les quatre tournois majeurs sur quatre surfaces différentes, performance que seuls Roger Federer, Andre Agassi et Novak Djokovic ont accomplie. Suite à sa victoire à l'Open d'Australie 2022, Nadal devient le troisième joueur à avoir remporté les quatre grands chelems sur cinq surfaces différentes après Roger Federer et Novak Djokovic.",

}

const Bio = () => {
  return (
    <div>
        <h1>{bio.player}</h1>
        <p> {bio.rafa}</p>
    </div>
  )
}

export default Bio